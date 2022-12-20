import React, { useState } from 'react'
import { GridContainerCenter } from '../styledComponents/GridContainerCenter'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DataPerson } from '../components/DataPerson';
import { PersonCircleIcon } from '../styledComponents/PersonCircleIcon';
import { Grid } from '@mui/material';
import EnhancedTable from '../components/Table/PayrollTable_';
import TextField from '@mui/material/TextField';
import SearchInput from '../styledComponents/SearchInput'

import { getPayrollEmployee, payEmployee } from '../api/payroll'

const PayrollPage = () => {

  let today = new Date()
  let month = () => {
    if ((today.getMonth() + 1) < 9) {
      return `0${today.getMonth() + 1}`
    }
    return (today.getMonth() + 1)
  }
  today = `${today.getFullYear()}-${month()}-${today.getDate()}`.toString()

  const [employee, setEmployee] = useState(null)
  const [totalValues, setTotalValues] = useState(null)
  const [production, setProduction] = useState(null)
  const [inputText, setInputText] = useState("")
  const [startDate, setStartDate] = useState(today)
  const [endDate, setEndDate] = useState(today)

  const handleChange = (v) => {
    setInputText(v)
  }
  const handleChangeDate = (text, v) => {
    if (text == 'start') {
      setStartDate(v)
    } if (text == 'end') {
      setEndDate(v)
    }
  }

  const handleChangeSwap = (item, value) => {
    if(item == "bolivar"){
      let newPayDollar = (totalValues.totalDollar - (value * totalValues.rate)).toFixed(2)
      setTotalValues({ ...totalValues, payDollar: newPayDollar, payBs: value })
      return
    }
    let newPayBs = (totalValues.totalBs - (value / totalValues.rate)).toFixed(2)
    setTotalValues({ ...totalValues, payDollar: value, payBs: newPayBs })
  }

  const executePay = async () => {
    try {
      let response = await payEmployee({
        employee_id: employee.employee_id,
        production: production,
        totalValues: totalValues
      });
      if (response.status != 200) {
        console.error("error: ", response.message)
        alert(response.message)
        return
      }
      alert(response.message)
      setEmployee(null)
      setTotalValues(null)
      setProduction(null)
    } catch (e) {
      alert(e)
    }
  }

  const handleSubmit = async () => {
    try {
      let response = await getPayrollEmployee({ emp_code: inputText, start_date: startDate, end_date: endDate });
      if (response.status != 200) {
        console.error("error: ", response.message)
        alert(response.message)
        return
      }
      setProduction(response.body.production)
      setEmployee(response.body.employee)
      setTotalValues(response.body.totalValues)
    } catch (error) {
      console.error("error: ", error)
      alert(error)
    }
  }

  return (
    <>
      <Box sx={{
        px: 1,
        mx: 1,
        my: 1,
      }} >
        <Grid
          container
          spacing={2}>
          <Grid item xs={12} sx={{ textAlign: 'center' }} >
            <SearchInput width={"50%"}
              onChange={handleChange}
              onSubmit={handleSubmit}
              value={inputText}
            />
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'end' }}>
            <TextField
              id="start"
              label="Desde"
              type="date"
              onChange={(e) => handleChangeDate("start", e.target.value)}
              defaultValue={today}
              InputLabelProps={{
                shrink: true,
              }} />
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'start' }}>
            <TextField
              id="end"
              label="Hasta"
              type="date"
              onChange={(e) => handleChangeDate("end", e.target.value)}
              defaultValue={today}
              InputLabelProps={{
                shrink: true,
              }} />
          </Grid>
        </Grid>
        {employee != null &&
          <Grid
            container
            spacing={2}>
            <Grid item xs={4} sx={{ textAlign: 'end' }}>
              <PersonCircleIcon />
            </Grid>
            <Grid item xs={8}>
              <GridContainerCenter
                container
                direction="column">
                <DataPerson employee={employee} />
              </GridContainerCenter>
            </Grid>
          </Grid>
        }
      </Box>

      {production != null && totalValues != null
        ? <Box id="containerPayroll">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={8}>
              <EnhancedTable production={production} />
            </Grid>
          </Grid>

          <Box sx={{
            px: 1,
            mx: 1,
            my: 2,
          }} >
            <Grid
              container
              spacing={2}>
              <Grid item xs={1}></Grid>
              <Grid item xs={2} sx={{ textAlign: 'center' }}>
                <h2>Total:</h2>
                <h1 style={{ color: "red" }}>{totalValues.totalUnid}</h1>
              </Grid>
              <Grid item xs={2} sx={{ textAlign: 'center' }}>
                <h2>Bolivares: </h2>
                <h1 style={{ color: "red" }}>{totalValues.totalBs}</h1>
              </Grid>
              <Grid item xs={2} sx={{ textAlign: 'center' }}>
                <h2>Dolares:</h2>
                <h1 style={{ color: "red" }}>{totalValues.totalDollar}</h1>
              </Grid>
              <Grid item xs={2} sx={{ textAlign: 'center' }}>
                <h2>Dolares a pagar:</h2>
                <input style={{ width: "40%", fontSize: "30px", fontWeight: "bold", color: "red", border: "none", outline: "none" }}
                  onChange={(e) => handleChangeSwap("dolar", e.target.value)}
                  onKeyPress={(e) => { if (e.key == "Enter") { handleSubmit() } }}
                  type="number"
                  step="0.01"
                  value={totalValues.payDollar} />
              </Grid>
              <Grid item xs={2} sx={{ textAlign: 'center' }}>
                <h2>Diferencia Bs:</h2>
                <input style={{ width: "40%", fontSize: "30px", fontWeight: "bold", color: "red", border: "none", outline: "none" }}
                  onChange={(e) => handleChangeSwap("bolivar", e.target.value)}
                  onKeyPress={(e) => { if (e.key == "Enter") { handleSubmit() } }}
                  type="number"
                  step="0.01"
                  value={totalValues.payBs} />
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
          </Box>
          <Box sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            px: 1,
            mx: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }} >

            <Grid container sx={{ my: 2 }}>
              <GridContainerCenter item xs={12}>
                <Button
                  onClick={() => executePay()}
                  variant="contained"
                  size="large"
                  sx={{ background: '#33eb91', fontSize: "25px", fontWeight: "600" }}>
                  Ejecutar pago
                </Button>
              </GridContainerCenter>
            </Grid>
          </Box>
        </Box>
        : null
      }

    </>
  )
}


export default PayrollPage

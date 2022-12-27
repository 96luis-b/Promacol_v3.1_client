import React, { useState, useCallback, useEffect } from 'react'

import { Grid } from '@mui/material'
import Container from '@mui/material/Container';
import { GridContainerCenter } from '../styledComponents/GridContainerCenter';
import { PersonCircleIcon } from '../styledComponents/PersonCircleIcon';
import { H2, H3, H1, H4, H5 } from '../styledComponents/Heading';

import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { DataPerson, DataPersonLarge, DataPersonMedium } from '../components/DataPerson';
import { AssistanceTable } from '../components/Table/AssistanceTable';
import { useLocation } from 'react-router'
import SearchInput from '../styledComponents/SearchInput'
import { searchEmployee, checkIn, ckeckOut } from '../api/employee'
import { checkUser } from '../api/auth'
import SuccessDialog from '../components/Modals/SuccessModal';
import LoaderDialog from '../components/Modals/LoaderDialog';
import useAuth from '../contexts/useAuth';


const AssitancePage = () => {
	let location = useLocation();
	const [row, setRow] = useState([])
	const [nbRows, setNbRows] = React.useState(0);
	const [employee, setEmployee] = useState(null)
	const [inputText, setInputText] = useState("")
	const [open, setOpen] = useState(false);
	const [loader, setLoader] = useState(false);

	const addRow = async () => {
		let status = true;
		let emp = JSON.parse(JSON.stringify(employee))
		row.forEach(element => {
			if (element.emp_code == employee.emp_code) {
				status = false
				alert("Usted ya ha chequeado su entrada")
				return
			}
		});
		if (status) {
			try {
				let response = await checkIn(employee.emp_code)
				if (response.status != 200) {
					alert(response.message)
					return console.error("error: ", response.message)
				}
				if (response.body) {
					setNbRows((x) => Math.min(100, x + 1))
					emp.date = response.body.date
					emp.time = response.body.time
					emp.employee_id = response.body.employee_id
					emp.id = row.length + 1
					emp.job_name = emp.job.label

					const list = [
						...row,
						emp
					]
					setRow(list)
					handleClickOpen()
					return
				}
				handleClickOpen()
			} catch (e) {
				alert(e)
			}
		}
	}

	const ckeckOutEmployee = async (rowId) => {
		try {
			let employee_id
			row.forEach((element) => {
				if (element.id == rowId) {
					employee_id = element.employee_id
				}
			})
			let response = await ckeckOut(employee_id);
			if (response.status != 200) return console.error("error: ", response.message)
			setEmployee(response.body)
		} catch (e) {
			alert(e)
		}
	}

	const handleClickOpen = () => {
		setOpen(true);
		setTimeout(function () {
			handleClose()
		}, 1000);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleChange = (v) => {
		setInputText(v)
	}

	const handleCloseLoader = () => {
		setLoader(false);
	};

	const handleOpenLoader = () => {
		setLoader(true);
	};

	const handleSubmit = async () => {
		try {
			if(inputText == '' || inputText == null) return alert("Campo vacio")
			handleOpenLoader()
			let response = await searchEmployee(inputText);
			if (response.status != 200) {
				handleCloseLoader()
				return alert(response.message)
			}
			setEmployee(response.body)
			handleCloseLoader()
		} catch (e) {
			alert(e)
		}
	}

	return (
		<>
			<Grid container
				direction="row"
				alignItems="center"
				>
				<Grid item xs={2}></Grid>
				<Grid item xs={7} 
				container 
				justifyContent="center" 
				>
					<h1>Chequeo de asistencia</h1>
				</Grid>
				<Grid item xs={2}>
					<SearchInput
						onChange={handleChange}
						onSubmit={handleSubmit}
						value={inputText}
					/>
				</Grid>
				<Grid item xs={1}></Grid>
			</Grid>
			<Container
				maxWidth="xl"
				sx={{ height: 'calc(100vh - 70px)' }}>
				<Grid sx={{ display: 'flex' }}>
					<GridContainerCenter
						container
						item
						direction="column"
						xs={6}
						sx={{ height: 'calc(100vh - 70px)' }}>
						{employee
							? <>
								<Box sx={{ mb: 2 }}>
									<PersonCircleIcon />
								</Box>
								<DataPersonMedium employee={employee} />
								<Box sx={{ mt: '4rem' }}>
									<Button
										variant="contained"
										size="large"
										sx={{ background: '#0cc1ed', fontSize: "20px" }}
										onClick={addRow}
									>
										Entrada
									</Button>
								</Box>
							</>
							: null
						}


					</GridContainerCenter>
					<GridContainerCenter item xs={6} sx={{ height: 'calc(100vh - 70px)', width: "60%" }}>
						{row.length > 0
							? <AssistanceTable row={row} nbRows={nbRows} setRow={setRow} ckeckOut={ckeckOutEmployee} />
							: null
						}
					</GridContainerCenter>
				</Grid>
			</Container>
			{open && <SuccessDialog open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} />}
			{loader
				? <LoaderDialog open={loader} handleClose={handleClose} />
				: null
			}
		</>
	)
}

export default AssitancePage;


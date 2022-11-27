import React, { useState } from 'react'

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ReportCard } from '../styledComponents/ReportCard';
import { GridContainerCenter } from '../styledComponents/GridContainerCenter'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';

import AlertDialog from '../components/Modals/ProductionReport'
import { getEmpProduction } from '../api/employee';
import { getPayrollEmployeeReport } from '../api/payroll';
import PayrollEmployeeReport from '../components/Modals/PayrollEmployeeReport';
import { dateTime } from '../helpers/DataTime';

const options = [
	{
		value: 1,
		label: 'Producción general de destajo',
	},
	{
		value: 2,
		label: 'Pago de nomina',
	},
];

const timeInit = dateTime("time")
const dateInit = dateTime("date")

export default function StatisticalReportPage() {

	const [open, setOpen] = useState(false);
	const [option, setOption] = useState(0);
	const [value, setValue] = useState(null);
	const [time, setTime] = useState(timeInit);
	const [date, setDate] = useState(dateInit);
	const [data, setData] = useState(null)
	const [group, setGroup] = useState(null)
	const [celda, setCelda] = useState(0)

	const handleChange = (event) => {
		setOption(event.target.value);
	};
	const handleChangeDate = (type, value) => {
		if (type == "time") setTime(value);
		if (type == "date") setDate(value);
	}

	const handleOpen = () => {
		setOpen(true)
	};
	const handleClose = () => {
		setOpen(false);
	}

	const turnPage = (string) => {
		let index = data?.length || 0
		if (string == "back") {
			let i = celda - 1
			if (i < 0) return
			setCelda(i)
			setGroup([data[i]])
		}
		if (string == "next") {
			let i = celda + 1
			if (i > index - 1) return
			setCelda(i)
			setGroup([data[i]])
		}
	}



	const handleSubmit = async () => {
		try {
			let response;
			switch (parseInt(option)) {
				case 1:
					response = await getEmpProduction({ date: date });
					if (response.status != 200) {
						console.error("error: ", response.message)
						alert(response.message)
						return
					}
					setData(response.body)
					setGroup([response.body[0]])
					handleOpen()
					break;
				case 2:
					response = await getPayrollEmployeeReport({ date: date });
					if (response.status != 200) {
						console.error("error: ", response.message)
						alert(response.message)
						return
					}
					setData(response.body)
					handleOpen()
					break
				default:
					console.log('default');
			}
		} catch (e) {
			alert(e)
		}
	}
	return (
		<>

			<GridContainerCenter
				sx={{ height: 'calc(100vh - 70px)' }}>
				<ReportCard>
					<Grid
						container
						direction="row"
						p={5}
					>
						<Grid item xs={12}>
							<Grid container direction="column">
								<Grid sx={{ height: '12rem' }}>
									<Box>
										<TextField
											id="outlined-basic"
											onChange={handleChange}
											value={option || ""}
											select
											label={"Seleccione una opción"}
											variant="outlined"
											sx={{ width: "50%" }} >
											{options.map((op) => (
												<MenuItem key={op.value} value={op.value}>
													{op.label}
												</MenuItem>
											))}
										</TextField>
									</Box>
								</Grid>
								<Grid container direction="row">
									<Grid item xs={8}>
										<Box>
											<TextField
												label="Hora"
												type="time"
												defaultValue={time}
												onChange={(e) => handleChangeDate("time", e.target.value)}
												variant="outlined"
												sx={{ width: "60%" }} />
										</Box>
									</Grid>
									<Grid item xs={4}>
										<Box>
											<TextField
												label="Fecha de nacimiento"
												type="date"
												onChange={(e) => handleChangeDate("date", e.target.value)}
												defaultValue={date}
												sx={{ width: "100%" }}
												InputLabelProps={{
													shrink: true,
												}} />
										</Box>
									</Grid>
								</Grid>
								<Grid
									container
									justifyContent="flex-end"
									alignItems="flex-end"
								>
									<Box sx={{ mt: '4rem' }}>
										<Button
											variant="contained"
											size="large"
											sx={{ background: '#0cc1ed', fontSize: "20px" }}
											onClick={() => handleSubmit()}>
											Buscar
										</Button>
									</Box>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</ReportCard>
			</GridContainerCenter>
			{open == true && option == 1
				? <AlertDialog
					open={open}
					handleOpen={handleOpen}
					handleClose={handleClose}
					turnPage={turnPage}
					data={data}
					group={group}
					date={date}
					time={time}
				/>
				: null
			}
			{open == true && option == 2
				? <PayrollEmployeeReport
					open={open}
					handleOpen={handleOpen}
					handleClose={handleClose}
					data={data}
					datePayroll={date}
					timePayroll={time}
				/>
				: null
			}
		</>
	)
}



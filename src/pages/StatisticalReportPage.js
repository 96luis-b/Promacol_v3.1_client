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
import { dateTime } from '../utils/DataTime';

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
		console.log("event: ", event.target.value)
		setOption(event.target.value);
	};
	const handleChangeDate = (type, value) => {
		if (type == "time") setTime(value);
		if (type == "date") setDate(value);
	}

	const handleOpen = () => {
		console.log("handleOpen: ", open)
		setOpen(true)
	};
	const handleClose = () => {
		console.log("handleClose")
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
					console.log("response: ssss:  ", response)
					if (response.status != 200) {
						console.error("error: ", response.message)
						alert(response.message)
						return
					}
					console.log("response: 11111:  ", response)

					setData(response.body)
					handleOpen()
					console.log("option: ", option)
					console.log("data: ", data)
					break
				case 3:
					console.log(1);
					break;
				case 4:
					console.log(2);
					break;
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








// const data = {
// 	"status": 200,
// 	"message": "Ok",
// 	"body": [
// 	  {
// 		"job_name": "Cangrejero",
// 		"category": [
// 		  {
// 			"category_id": 2,
// 			"job_id": 1,
// 			"job_name": "Cangrejero",
// 			"employee_id": 2,
// 			"emp_code": "OB-1",
// 			"name1": "alberto",
// 			"name2": "Jose",
// 			"lastname1": "Bocaranda",
// 			"lastname2": "Sanchez",
// 			"id_number": 25342580,
// 			"production": [
// 			  {
// 				"employee_id": 2,
// 				"worker_prod_id": 2,
// 				"start_date": "2022-08-23T04:00:00.000Z",
// 				"prod_id": 2,
// 				"prod_name": "Lump",
// 				"quantity": 2
// 			  },
// 			  {
// 				"employee_id": 2,
// 				"worker_prod_id": 2,
// 				"start_date": "2022-08-23T04:00:00.000Z",
// 				"prod_id": 1,
// 				"prod_name": "Jumbo",
// 				"quantity": 1
// 			  }
// 			]
// 		  }
// 		]
// 	  },
// 	  {
// 		"job_name": "Colmillero",
// 		"category": [
// 		  {
// 			"category_id": 2,
// 			"job_id": 2,
// 			"job_name": "Colmillero",
// 			"employee_id": 3,
// 			"emp_code": "OB-2",
// 			"name1": "Maria",
// 			"name2": "Jose",
// 			"lastname1": "Castellano",
// 			"lastname2": "Perez",
// 			"id_number": 26235789,
// 			"production": [
// 			  {
// 				"employee_id": 3,
// 				"worker_prod_id": 3,
// 				"start_date": "2022-08-23T04:00:00.000Z",
// 				"prod_id": 3,
// 				"prod_name": "Claw",
// 				"quantity": 3
// 			  },
// 			  {
// 				"employee_id": 3,
// 				"worker_prod_id": 3,
// 				"start_date": "2022-08-23T04:00:00.000Z",
// 				"prod_id": 4,
// 				"prod_name": "Cocktail",
// 				"quantity": 2
// 			  }
// 			]
// 		  },
// 		  {
// 			"category_id": 2,
// 			"job_id": 2,
// 			"job_name": "Colmillero",
// 			"employee_id": 8,
// 			"emp_code": "OB-7",
// 			"name1": "Eddy",
// 			"name2": "Alberto",
// 			"lastname1": "Reyes",
// 			"lastname2": "Tonetti",
// 			"id_number": 21125544
// 		  }
// 		]
// 	  },
// 	  {
// 		"job_name": "Revisador de carne blanca",
// 		"category": [
// 		  {
// 			"category_id": 2,
// 			"job_id": 3,
// 			"job_name": "Revisador de carne blanca",
// 			"employee_id": 4,
// 			"emp_code": "OB-3",
// 			"name1": "Thomas",
// 			"name2": "Star",
// 			"lastname1": "Thomas",
// 			"lastname2": "Castillo",
// 			"id_number": 25644710
// 		  }
// 		]
// 	  },
// 	  {
// 		"job_name": "Revisador de carne negra",
// 		"category": [
// 		  {
// 			"category_id": 2,
// 			"job_id": 4,
// 			"job_name": "Revisador de carne negra",
// 			"employee_id": 5,
// 			"emp_code": "OB-4",
// 			"name1": "Tito",
// 			"name2": "Sarmiento",
// 			"lastname1": "Toño",
// 			"lastname2": "Toro",
// 			"id_number": 20444586
// 		  }
// 		]
// 	  },
// 	  {
// 		"job_name": "Revisador de carne jumbo",
// 		"category": [
// 		  {
// 			"category_id": 2,
// 			"job_id": 5,
// 			"job_name": "Revisador de carne jumbo",
// 			"employee_id": 6,
// 			"emp_code": "OB-5",
// 			"name1": "Genesis",
// 			"name2": "Perez",
// 			"lastname1": "Camila",
// 			"lastname2": "Vera",
// 			"id_number": 27755448
// 		  }
// 		]
// 	  },
// 	  {
// 		"job_name": "Desconchador",
// 		"category": [
// 		  {
// 			"category_id": 2,
// 			"job_id": 6,
// 			"job_name": "Desconchador",
// 			"employee_id": 7,
// 			"emp_code": "OB-6",
// 			"name1": "Daniel",
// 			"name2": "Jose",
// 			"lastname1": "Suarez",
// 			"lastname2": "Suarez",
// 			"id_number": 19025558
// 		  }
// 		]
// 	  }
// 	]
//   }
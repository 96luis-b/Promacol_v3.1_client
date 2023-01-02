import React, { useState } from 'react'

import Container from '@mui/material/Container';

import { BoardTop } from '../components/BoardTop';
import { BoardBottom } from '../components/BoardBottom';
import SearchInput from '../styledComponents/SearchInput'
import { searchCountEmployee, moreLess } from '../api/countBoard'
import {
	save,
	saveGroupCount,
	getSingleCount,
	getGroupCount,
	deteleSingleCount,
	deteleGroupCount
} from '../helpers/singleCount'

import { Grid } from '@mui/material';
import { H1, H5 } from '../styledComponents/Heading';
import Footer from '../styledComponents/Footer';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import MobileKeyBoard from '../components/MobileKeyBoard';


const CountBoardPage = () => {

	const [inputText, setInputText] = useState("")
	const [employee, setEmployee] = useState(null)
	const [production, setProduction] = useState(null)
	const [total, setTotal] = useState(0)
	const [singleCount, setSingleCount] = useState([])
	const [groupCount, setGroupCount] = useState([])
	const [active, setActive] = useState(false);

	const cleanFields = () => {
		setEmployee(null)
		setProduction(null)
		setTotal(0)
		setSingleCount([])
		setGroupCount([])
	}

	const handleChange = (v) => {
		setInputText(v)
	}

	const handleChangeKeyBoard = (v) => {
		console.log("aqui estoy")
		let text = `${inputText}${v}`
		setInputText(text)
	}

	const handleChangeRemove = () => {
		let strnew = inputText.substring(0, inputText.length - 1);
		setInputText(strnew)
	}

	const handleMoreLess = async (prod, v, quantity) => {
		let status = true
		// let p = JSON.parse(JSON.stringify(production))
		let p = production
		let product = {}
		let response
		p.forEach(element => {
			if (prod.prod_id == element.prod_id) {
				if (element.quantity <= 0 && v == -1) {
					status = false
					return
				}
				element.quantity = quantity + v
				product.prod_name = element.prod_name
				product.prod_id = element.prod_id
				product.value = v
			}
		});

		if (status) {
			try {
				// handleActive()
				response = await moreLess({
					product: product,
					employee: {
						employee_id: employee.employee_id,
						emp_code: employee.emp_code
					}
				});
				if (response.status != 200) return console.error("error: ", response.message)
				setProduction(setP => setP = p)
				setTotal(setT => setT + v)
				let s = save({ employee, production, prod_id: prod.prod_id }, v)
				let group = saveGroupCount(production, v, prod.prod_id)
				setSingleCount(setS => setS = s)
				setGroupCount(setG => setG = group)
				// handleUnactive()
			} catch (e) {
				alert(e)
			}
		}
	}

	const handleCleanSingleCount = () => {
		deteleSingleCount()
		setSingleCount(getSingleCount(employee.employee_id) || [])
	}
	const handleCleanGroupCount = () => {
		deteleGroupCount()
		setGroupCount(getGroupCount(JSON.parse(JSON.stringify(production))) || [])
	}

	const handleUnactive = () => {
		setActive(false);
	};

	const handleActive = () => {
		setActive(true);
	};

	const handleSubmit = async () => {
		try {
			if (inputText == '' || inputText == null) return alert("Campo vacio")
			handleActive()
			let response = await searchCountEmployee(inputText);
			if (response.status != 200) {
				console.error("error: ", response.message)
				cleanFields()
				handleUnactive()
				alert(response.message)
				return
			}
			console.log("response: ", response)
			setEmployee(response.body.employee)
			setProduction(response.body.production)
			setTotal(response.body.total)
			setSingleCount(getSingleCount(JSON.parse(JSON.stringify(response.body.employee.employee_id))) || [])
			setGroupCount(getGroupCount(JSON.parse(JSON.stringify(response.body.production))) || [])
			setInputText("")
			handleUnactive()
		} catch (e) {
			alert(e)
		}
	}

	return (
		<Grid sx={{ textAlign: "center", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
			<Grid container
				direction="row"
				alignItems="center"
				mb={4}
			>
				<Grid item xs={1} lg={2}></Grid>
				<Grid item xs={6} lg={7}
					container
					justifyContent="center"
				>
					{window.innerWidth < 540
						? <H5>Tablero de conteo</H5>
						: <H1>Tablero de conteo</H1>
					}
				</Grid>
				<Grid item xs={4} lg={2}>
					<SearchInput
						onChange={handleChange}
						onSubmit={handleSubmit}
						value={inputText}
					/>
				</Grid>
				<Grid item xs={1} lg={1}></Grid>
			</Grid>
			{employee != null && production != null
				? <Container maxWidth="xl" sx={{ height: 'calc(100vh - 70px)', flex: 1 }}>
					<BoardTop employee={employee} total={total} />
					<BoardBottom
						production={production}
						handleMoreLess={handleMoreLess}
						singleCount={singleCount}
						groupCount={groupCount}
						handleCleanSingleCount={handleCleanSingleCount}
						handleCleanGroupCount={handleCleanGroupCount}
						active={active}
					/>
				</Container>
				: null
			}
			{window.innerWidth < 540 && <>
				<MobileKeyBoard
					handleChangeKeyBoard={handleChangeKeyBoard}
					handleSubmit={handleSubmit}
					handleChangeRemove={handleChangeRemove}
				/>
			</>
			}
		</Grid>
	)
}

export default CountBoardPage
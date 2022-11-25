import React, { useEffect, useState } from 'react'

import Box from '@mui/material/Box';
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

import LoaderDialog from '../components/Modals/LoaderDialog';


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

	const handleMoreLess = async (prod, v, quantity) => {
		let status = true
		// let p = Object.assign([] , production)
		let p = JSON.parse(JSON.stringify(production))
		let product = {}
		let response
		p.forEach(element => {
			if (prod.prod_id == element.prod_id) {
				if (element.quantity <= 0 && v == -1) {
					status = false
					return
				}
				console.log("value: ", v)
				element.quantity = quantity + v
				product.prod_name = element.prod_name
				product.prod_id = element.prod_id
				product.value = v
			}
		});

		if (status) {
			try {
				handleActive()
				// setProduction(p)
				// setTotal(total + v)
				// let s = save({ employee, production, prod_id: prod.prod_id }, v)
				// let group = saveGroupCount(production, v, prod.prod_id)
				// setSingleCount(s)
				// setGroupCount(group)
				response = await moreLess({
					product: product,
					employee: {
						employee_id: employee.employee_id,
						emp_code: employee.emp_code
					}
				});
				if (response.status != 200) return console.error("error: ", response.message)
				// error al realizar peticiones consecutivas
				// el cambio de estado de production y total no se
				// efectua rapidamente y se desactualiza 
				console.log("response: ", response)
				setProduction(p)
				setTotal(total + v)
				let s = save({ employee, production, prod_id: prod.prod_id }, v)
				let group = saveGroupCount(production, v, prod.prod_id)
				setSingleCount(s)
				setGroupCount(group)
				handleUnactive()
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
			handleActive()
			let response = await searchCountEmployee(inputText);
			console.log("response: ", response)
			if (response.status != 200) {
				console.error("error: ", response.message)
				cleanFields()
				handleUnactive()
				alert(response.message)
				return
			}
			setEmployee(response.body.employee)
			setProduction(response.body.production)
			setTotal(response.body.total)
			setSingleCount(getSingleCount(JSON.parse(JSON.stringify(response.body.employee.employee_id))) || [])
			setGroupCount(getGroupCount(JSON.parse(JSON.stringify(response.body.production))) || [])
			handleUnactive()
		} catch (e) {
			alert(e)
		}
	}

	return (
		<>
			<Box sx={{
				display: 'flex',
				justifyContent: 'flex-end',
				px: 1,
				mx: 1,
				bgcolor: 'background.paper',
				borderRadius: 1,
			}}
			>
				<SearchInput
					onChange={handleChange}
					onSubmit={handleSubmit}
					value={inputText} />
			</Box>
			{employee != null && production != null
				? <Container maxWidth="xl" sx={{ height: 'calc(100vh - 70px) ' }}>
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
			{/* {loader
				? <LoaderDialog open={loader} handleClose={handleCloseLoader} />
				: null
			} */}
		</>
	)
}

export default CountBoardPage



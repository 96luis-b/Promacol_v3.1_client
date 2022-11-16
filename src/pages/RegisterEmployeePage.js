import React, { useEffect, useState, useContext } from 'react'
import FormRegisterEmployee from '../components/FormRegisterEmployee';
import { GridContainerCenter } from '../styledComponents/GridContainerCenter';
import { Grid } from '@mui/material'
import Box from '@mui/material/Box';
import Sidebar from '../components/Sidebar'
import Nav from '../styledComponents/Nav'
import SearchInput from '../styledComponents/SearchInput'
import { signupEmployee, getJob, updateEmployee, searchEmployee } from '../api/employee'
import LoaderDialog from '../components/Modals/LoaderDialog';


// import { searchEmployee } from '../api/employee'

const initialData = {
    emp_code: '',
    name1: '',
    name2: '',
    lastname1: '',
    lastname2: '',
    birthday: '',
    id_number: '',
    phone: '',
    job: ''
}

export default function RegisterEmployeePage() {
    const [options, setOptions] = useState([])
    const [option, setOption] = useState(0);
    const [data, setData] = useState(initialData)
    const [loader, setLoader] = useState(false);
    // const [employee, setEmployee] = useState({})
    const [value, setValue] = useState("")
    useEffect(async () => {
        try {
            let response = await getJob();
            setOptions(response.body)
        } catch (e) {
            alert(e)
        }
    }, [])

    const handleChangeData = (item, v) => {
        let element = v
        if (item == "job") {
            element = options.filter(e => v == e.value)
            element = element[0]
            setOption(`${v}`)
        }

        setData({
            ...data,
            [item]: element
        })
    };

    const handleCloseLoader = () => {
        setLoader(false);
    };

    const handleOpenLoader = () => {
        setLoader(true);
    };

    const handleClearData = async () => {
        setData(initialData)
        setOption(1)
    }
    const handleSignupEmployee = async () => {
        try {
            handleOpenLoader()
            if (checkInput(data)) return alert("Por favor complete todos los campos")
            let response = await signupEmployee(data);
            if (response.status != 200) console.error("error: ", response.message)
            alert(response.message)
            handleCloseLoader()
        } catch (e) {
            alert(e)
        }
    }

    const handleUpdateEmployee = async () => {
        try {
            let response = await updateEmployee(data);
            if (response.status != 200) console.error("error: ", response.message)
        } catch (e) {
            alert(e)
        }
    }

    const handleChange = (value) => {
        setValue(value)
    }

    const handleSubmit = async () => {
        try {
            handleOpenLoader()
            let response = await searchEmployee(value);
            if (response.status != 200) {
                console.error("error: ", response.message)
                alert(response.message)
                handleCloseLoader()
                return
            }
            setData(response.body)
            setOption((response.body.job.value).toString())
            handleCloseLoader()
        } catch (e) {
            alert(e)
        }
    }

    const checkInput = (data) => {
        if (data.name1 != '' && data.name2 != '' && data.lastname1 != '' && data.lastname2 != '' && data.birthday != '' && data.id_number != '' && data.phone != '' && data.job.value != '') {
            return false
        }
        return true
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
                    value={value} />
            </Box>
            <FormRegisterEmployee
                options={options}
                option={option}
                data={data}
                handleChangeData={handleChangeData}
                handleSignupEmployee={handleSignupEmployee}
                handleUpdateEmployee={handleUpdateEmployee}
                handleClearData={handleClearData}
            />
            {loader
                ? <LoaderDialog open={loader} handleClose={handleCloseLoader} />
                : null
            }
        </>
    )
}


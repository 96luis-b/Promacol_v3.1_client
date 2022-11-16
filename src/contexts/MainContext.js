import React, { createContext, useContext, useState, useEffect } from 'react'
import { switchSearch } from './Search_Context'
// import { EmployeeContext } from './EmployeeContext'

import { signupEmployee, getJob, updateEmployee } from '../api/employee'

const MainContext = createContext()
const initialData = {
    emp_code:'',
    name1: '',
    name2: '',
    lastname1: '',
    lastname2: '',
    birthday: '',
    id_number: '',
    phone: '',
    job: ''
}

export const MainProvider = ({ children }) => {
    // const [tested, setTested] = useState("tested")
    // const [currencies, setCurrencies] = useState([])
    // const [currency, setCurrency] = useState(null);
    // const [value, setValue] = useState(null);
    // const [data, setData] = useState(initialData)
    
    // const getJob = ()=>{
    //     console.log("getJob")
    //     let response = await getJob();
    //     console.log("response: ", response)
    //     setCurrencies(response.body)
    // }


    // useEffect(async () => {
    //     console.log("getJob")
    //     let response = await getJob();
    //     console.log("response: ", response)
    //     setCurrencies(response.body)
    // }, [])

    // const handleChangeData = (item, value) => {
    //     let element = value
    //     if(item == "job") {
    //         element = currencies.filter(e => value == e.value)
    //         element = element[0]
    //         setCurrency(value)
    //     }

    //     setData({
    //         ...data,
    //         [item]: element
    //     })
    // };

    // const handleSignupEmployee = async() => {
    //     console.log("handleSignupEmployee: ", data)
    //     // let response = await signupEmployee(data);
    //     // console.log("response: ", response)
    // }

    // const handleUpdateEmployee = async()=>{
    //     console.log("handleUpdateEmployee: ", data)

    //     // let response = await updateEmployee(data);
    //     // console.log("response: ", response)
    // }

    // const contextValue = {
    //     tested,
    //     currencies,
    //     currency,
    //     value,
    //     data,
    //     handleChangeData,
    //     handleSignupEmployee,
    //     handleUpdateEmployee
    // }

    const listContext = { switchSearch }
    return (
        <MainContext.Provider value={listContext}>
            {children}
        </MainContext.Provider>
    )
}



export default MainContext
import React, { useEffect, useState } from 'react'

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

export const employeeContext = ()=>{
	// const [currencies, setCurrencies] = useState([])
 //    const [currency, setCurrency] = useState(null);
 //    const [value, setValue] = useState(null);
 //    const [data, setData] = useState(initialData)

 //    useEffect(async () => {
 //        let response = await getJob();
 //        setCurrencies(response.body)
 //    }, [])

 //    const handleChangeData = (item, value) => {
 //        let element = value
 //        if(item == "job") {
 //            element = currencies.filter(e => value == e.value)
 //            element = element[0]
 //            setCurrency(value)
 //        }

 //        setData({
 //            ...data,
 //            [item]: element
 //        })
 //    };

 //    const handleSignupEmployee = async() => {
 //        // console.log("data: ", data)
 //        let response = await signupEmployee(data);
 //        console.log("response: ", response)
 //    }

 //    const handleUpdateEmployee = async()=>{
 //        let response = await updateEmployee(data);
 //        console.log("response: ", response)
 //    }
 return(<></>)
}
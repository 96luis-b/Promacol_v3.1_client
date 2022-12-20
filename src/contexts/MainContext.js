import React, { createContext, useContext, useState, useEffect } from 'react'
import { switchSearch } from './Search_Context'

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

    const listContext = { switchSearch }
    return (
        <MainContext.Provider value={listContext}>
            {children}
        </MainContext.Provider>
    )
}



export default MainContext
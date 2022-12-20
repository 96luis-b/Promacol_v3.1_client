import React, { useEffect, useState, useContext } from 'react'
import MainContext from './MainContext'


export const switchSearch = (location) => {
    switch (location) {
        case "/scop/obrero/asistencia":
            return assistanceSearch
        case "/scop/obrero/tablero_conteo":
            return countBoardSearch
        case "/scop/obrero/registrar":
            return <RegisterStaffSearch/>
        case "/scop/pago_nomina":
            return payrollSearch
        default:
            return false
    }
}

const assistanceSearch = (e, value) => {
    if ("Enter" == e.key) {
        return console.log("assistanceSearch")
    }
}

const countBoardSearch = (e, value) => {
    if ("Enter" == e.key) {
        return console.log("countBoardSearch")
    }
}

const RegisterStaffSearch = (e, value) => {
    const { contextValue } = useContext(MainContext)
}

const payrollSearch = (e, value) => {
    if ("Enter" == e.key) {
    }
}
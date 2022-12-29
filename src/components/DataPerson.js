import React from 'react'

import { H1, H2, H3, H4, H5, H6 } from '../styledComponents/Heading'

export const DataPerson = ({ employee }) => {

    const DataPersonSwitch = (screen) => {
        switch (true) {
            case screen < 540:
                return <DataPersonSmall employee={employee} />
                break;
            case screen >= 540 || screen < 720:
                return <DataPersonMedium employee={employee} />
                break;
            case screen >= 720:
                return <DataPersonLarge employee={employee} />
                break;
            default:
                break;
        }
    }

    return (
        <>
            {DataPersonSwitch(window.innerWidth)}
        </>
    )
}

export const DataPersonLarge = ({ employee }) => {
    let names = `${employee?.name1} ${employee?.name2}`
    let lastnames = `${employee?.lastname1} ${employee?.lastname2}`
    return (
        <>
            <H2>{names}</H2>
            <H2>{lastnames}</H2>
            <H3>C.I: {employee.id_number}</H3>
            <H3>Area de Trabajo: {employee.job_name || employee?.job.label}</H3>
            <H1>Codigo: <span style={{ color: "#F90716" }}>{employee.emp_code}</span></H1>
        </>
    )
}

export const DataPersonMedium = ({ employee }) => {
    let names = `${employee?.name1} ${employee?.name2}`
    let lastnames = `${employee?.lastname1} ${employee?.lastname2}`
    return (
        <>
            <H3>{names}</H3>
            <H3>{lastnames}</H3>
            <H4>C.I: {employee.id_number}</H4>
            <H4>Area de Trabajo: {employee.job_name || employee?.job.label}</H4>
            <H3>Codigo: <span style={{ color: "#F90716" }}>{employee.emp_code}</span></H3>
        </>
    )
}

export const DataPersonSmall = ({ employee }) => {
    let names = `${employee?.name1} ${employee?.name2}`
    let lastnames = `${employee?.lastname1} ${employee?.lastname2}`
    return (
        <>
            <H5>{names}</H5>
            <H5>{lastnames}</H5>
            <H5>C.I: {employee.id_number}</H5>
            <H6>{employee.job_name || employee?.job.label}</H6>
            <H4><span style={{ color: "#F90716" }}>{employee.emp_code}</span></H4>
        </>
    )
}
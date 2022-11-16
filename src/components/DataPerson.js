import React from 'react'

import { H1, H2, H3, H4 } from '../styledComponents/Heading'
import { GridContainerCenter } from '../styledComponents/GridContainerCenter';

export const DataPerson = ({employee}) => {

    return (
        <>
            {window.screen.width < 1400
                ? <DataPersonMedium employee={employee}/>
                : <DataPersonLarge employee={employee}/>
            }
        </>
    )
}

export const DataPersonLarge = ({employee}) => {
    let fullName = `${employee?.name1} ${employee?.name2} ${employee?.lastname1} ${employee?.lastname2}`
    return (
        <>
            <H2>{fullName}</H2>
            <H3>C.I: {employee.id_number}</H3>
            <H3>Area de Trabajo: {employee.job_name || employee?.job.label}</H3>
            <H1>Codigo: <span style={{ color: "#F90716" }}>{employee.emp_code}</span></H1>
        </>
    )
}

export const DataPersonMedium = ({employee}) => {
    let fullName = `${employee?.name1} ${employee?.name2} ${employee?.lastname1} ${employee?.lastname2}`
    return (
        <>
            <H3>{fullName}</H3>
            <H4>C.I: {employee.id_number}</H4>
            <H4>Area de Trabajo: {employee.job_name || employee?.job.label}</H4>
            <H3>Codigo: <span style={{ color: "#F90716" }}>{employee.emp_code}</span></H3>
        </>
    )
}

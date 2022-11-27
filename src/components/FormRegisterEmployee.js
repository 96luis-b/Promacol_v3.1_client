import React, { useEffect, useState, useContext } from 'react'

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { GridContainerCenter } from '../styledComponents/GridContainerCenter';
import { TextFieldSelect } from './TextFieldSelect';

const FormRegisterEmployee = ({
        options, 
        option, 
        data, 
        handleChangeData, 
        handleSignupEmployee, 
        handleUpdateEmployee,
        handleClearData
    }) => {

    return (
        <>
            <Container
                maxWidth="lg"
                sx={{ height: 'calc(100vh - 70px)', zIndex:-10 }}
                >
                <GridContainerCenter
                    container
                    direction="column"
                    sx={{ height: 'calc(100vh - 70px)' }}
                >
                    <GridContainerCenter sx={{ width: "100%", mb: 4 }}>
                        <TextField id="outlined-basic" disabled={true} label="Codigo" value={data.emp_code} variant="outlined" sx={{ width: "50%" }} />
                    </GridContainerCenter>
                    <GridContainerCenter sx={{ height: '420px' }}
                        container
                        direction="row">

                        <GridContainerCenter
                            item
                            xs={6}
                            container
                            direction="column">
                            <TextField onChange={(ev) => handleChangeData('name1', ev.target.value)} id="outlined-basic" value={data.name1} label="Primer nombre" variant="outlined" autoComplete='off' sx={{ width: "90%" }} />
                            <TextField onChange={(ev) => handleChangeData('lastname1', ev.target.value)} id="outlined-basic" value={data.lastname1} label="Primer Apellido" variant="outlined" autoComplete='off' sx={{ width: "90%", my: 4 }} />
                            <TextField onChange={(ev) => handleChangeData('id_number', ev.target.value)} id="outlined-basic" value={data.id_number} label="Cedula de identidad" type="number" variant="outlined" autoComplete='off' sx={{ width: "90%" }} />
                            <TextField onChange={(ev) => handleChangeData('birthday', ev.target.value)} id="outlined-basic" value={data.birthday} type="date" variant="outlined" sx={{ width: "90%", my: 4 }} />

                        </GridContainerCenter>
                        <GridContainerCenter
                            item
                            xs={6}
                            container
                            direction="column">
                            <TextField onChange={(ev) => handleChangeData('name2', ev.target.value)} id="outlined-basic" value={data.name2} label="Segundo nombre" variant="outlined" autoComplete='off' sx={{ width: "90%" }} />
                            <TextField onChange={(ev) => handleChangeData('lastname2', ev.target.value)} id="outlined-basic" value={data.lastname2} label="Segundo apellido" variant="outlined" autoComplete='off' sx={{ width: "90%", my: 4 }} />
                            <TextField onChange={(ev) => handleChangeData('phone', ev.target.value)} id="outlined-basic" value={data.phone} label="Número de telefono" type="number" variant="outlined" autoComplete='off' sx={{ width: "90%" }} />
                            <TextFieldSelect item={"job"} options={options} onChange={handleChangeData} option={option} width={"90%"} my={4} label={"Puesto de trabajo"} />
                        </GridContainerCenter>
                        <GridContainerCenter
                            item
                            xs={12}
                            container
                            direction="row">
                            <Button onClick={() => handleClearData()} variant="contained" size="large" sx={{ background: '#ff4569', fontSize: "25px", fontWeight: "600" }}>Limpiar</Button>
                            <Button onClick={() => handleUpdateEmployee()} variant="contained" size="large" sx={{ background: '#ffcd38', fontSize: "25px", fontWeight: "600", mx: 7 }}>Actualizar</Button>
                            <Button onClick={() => handleSignupEmployee()} variant="contained" size="large" sx={{ background: '#33eb91', fontSize: "25px", fontWeight: "600" }}>Guardar</Button>
                        </GridContainerCenter>
                    </GridContainerCenter>
                </GridContainerCenter>
            </Container>
        </>
    )
}

export default FormRegisterEmployee

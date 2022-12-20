import React from 'react'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { GridContainerCenter } from '../styledComponents/GridContainerCenter';

const FormRegisterSupplier = () => {
    return (
        <>
            <Container
                maxWidth="lg"
            >
                <GridContainerCenter
                    container
                    direction="column"
                >
                    <GridContainerCenter sx={{ width: "100%", mb: 4 }}>
                        <TextField id="outlined-basic" label="Codigo" variant="outlined" autoComplete="off" sx={{ width: "50%" }} />
                    </GridContainerCenter>
                    <GridContainerCenter
                        container
                        direction="row">

                        <GridContainerCenter
                            item
                            xs={6}
                            container
                            direction="column">
                            <TextField id="outlined-basic" label="Primer nombre" variant="outlined" autoComplete="off" sx={{ width: "90%" }} />
                            <TextField id="outlined-basic" label="Primer Apellido" variant="outlined" autoComplete="off" sx={{ width: "90%", my: 4 }} />
                            <TextField id="outlined-basic" label="Cedula de identidad" type="number" autoComplete="off" variant="outlined" sx={{ width: "90%" }} />
                            <TextField id="outlined-basic" label="Fecha de nacimiento" type="date" defaultValue="2017-05-24" variant="outlined" sx={{ width: "90%", my: 4 }} />

                        </GridContainerCenter>
                        <GridContainerCenter
                            item
                            xs={6}
                            container
                            direction="column">
                            <TextField id="outlined-basic" label="Segundo nombre" variant="outlined" autoComplete="off" sx={{ width: "90%" }} />
                            <TextField id="outlined-basic" label="Segundo apellido" variant="outlined" autoComplete="off" sx={{ width: "90%", my: 4 }} />
                            <TextField id="outlined-basic" label="Número de telefono" type="number" autoComplete="off" variant="outlined" sx={{ width: "90%" }} />
                            <TextField id="outlined-basic" label="Empresa" variant="outlined" autoComplete="off" sx={{ width: "90%", my: 4 }} />
                        </GridContainerCenter>
                        <GridContainerCenter
                            item
                            xs={12}
                            container
                            direction="row">
                            <Button variant="contained" size="large" sx={{ background: '#ff4569', fontSize: "25px", fontWeight: "600" }}>Limpiar</Button>
                            <Button variant="contained" size="large" sx={{ background: '#ffcd38', fontSize: "25px", fontWeight: "600", mx: 7 }}>Actualizar</Button>
                            <Button variant="contained" size="large" sx={{ background: '#33eb91', fontSize: "25px", fontWeight: "600" }}>Guardar</Button>
                        </GridContainerCenter>
                    </GridContainerCenter>
                </GridContainerCenter>
            </Container>
        </>
    )
}

export default FormRegisterSupplier

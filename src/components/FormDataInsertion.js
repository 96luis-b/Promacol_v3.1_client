import React from 'react'

import Container from '@mui/material/Container';
import { GridContainerCenter } from '../styledComponents/GridContainerCenter';
import { Grid } from '@mui/material'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { AssistanceTable } from '../components/Table/AssistanceTable';
import { DataGrid } from '@mui/x-data-grid';
import { TextFieldSelect } from './TextFieldSelect';
import { DataInsertionTable } from './Table/DataInsertionTable';


export const FormDataInsertion = () => {


    return (
        <>
            <Container
                maxWidth="lg"
                sx={{ height: 'calc(100vh - 70px)' }}>
                <GridContainerCenter container direction="column" sx={{ height: 'calc(100vh - 70px)' }}>
                    <Grid container direction="row" sx={{ height: "160px", width: "100%" }}>
                        <Grid item xs={8} >
                            <Grid container item justifyContent="start" alignItems="center" xs={12} sx={{ mb: 2 }}>
                                <TextFieldSelect label={"Zona de extracción"} />
                            </Grid>
                            <Grid container item justifyContent="start" alignItems="center" xs={12} sx={{}}>
                                <TextFieldSelect label={"Tipo de producto"} />
                            </Grid>
                        </Grid>
                        <Grid item container direction="column" xs={4}>
                            <Grid sx={{ height: "80px" }}>
                                <TextField id="outlined-basic" type="number" label="Cantidad" variant="outlined" sx={{ width: "100%" }} />
                            </Grid>
                            <Grid>
                                <Grid container direction="row">
                                    <GridContainerCenter item xs={6} >
                                        <Button variant="contained" sx={{ background: '#0cc1ed', fontSize: "15px" }}>Entrada</Button>
                                    </GridContainerCenter>
                                    <GridContainerCenter item xs={6} >
                                        <Button variant="contained" sx={{ background: '#33eb91', fontSize: "15px" }}>Guardar</Button>
                                    </GridContainerCenter>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sx={{ height: "367px", width: "100%" }}>
                        <DataInsertionTable />
                    </Grid>
                </GridContainerCenter>
            </Container>
        </>
    )
}

const columns = [
    { field: 'id', headerName: 'Nro', width: 70 },
    { field: 'codigo', headerName: 'Codigo', width: 90 },
    {
        field: 'fullName',
        headerName: 'Nombre completo',
        sortable: false,
        width: 230,
        valueGetter: (params) =>
            `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
            }`,
    },
    {
        field: 'ptrabajo',
        headerName: 'Puesto de trabajo',
        type: 'number',
        width: 140,
        editable: true,
    },
    {
        field: 'fe_inicio',
        headerName: 'Fecha',
        width: 80,
        editable: true,
    },
    {
        field: 'hr_inicio',
        headerName: 'Hora',
        width: 75,
        editable: true,
    },

];


const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
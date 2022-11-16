import React from 'react'
import Container from '@mui/material/Container';
import { GridContainerCenter } from '../styledComponents/GridContainerCenter';
import { Grid, TextField } from '@mui/material'
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import { DryWeightTable } from '../components/Table/DryWeightTable';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormDryWeight from '../components/FormDryWeight';
import FormHydratedWeight from '../components/FormHydratedWeight';
import { HydratedWeightTable } from '../components/Table/HydratedWeightTable'

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const ReceptionPage = () => {


    return (
        <>
            <Container
                maxWidth="xl"
            >
                <Grid sx={{ display: 'flex', height: "calc(100vh - 170px)" }}>
                    <GridContainerCenter
                        container
                        item
                        direction="column"
                        xs={4}
                    >
                        <Stack direction="row" sx={{ mb: "10px" }} spacing={2} alignItems="center">
                            <h3>Pesaje Seco</h3>
                            <Switch {...label} defaultChecked />
                            <h3>Pesaje Hidratado</h3>
                        </Stack>
                        {/* <FormDryWeight/> */}
                        <FormHydratedWeight />
                        <TextField
                            id="outlined-basic"
                            label="Cantidad de kilogramos"
                            type="number"
                            variant="outlined"
                            autoComplete="off"
                            sx={{ width: "62%" }} />
                        <Box sx={{ mt: '4rem' }}>
                            <Button variant="contained" size="large" sx={{ mr: "20px", background: '#0cc1ed', fontSize: "20px", fontWeight: "600" }}>Insertar</Button>
                            <Button variant="contained" size="large" sx={{ background: '#33eb91', fontSize: "20px", fontWeight: "600" }}>Guardar</Button>
                        </Box>
                    </GridContainerCenter>
                    <GridContainerCenter item xs={8}>
                        {/* <DryWeightTable /> */}
                        <HydratedWeightTable />
                    </GridContainerCenter>
                </Grid>
            </Container>
        </>
    )
}

export default ReceptionPage


import React from 'react'
import { GridContainerCenter } from '../styledComponents/GridContainerCenter';
import { Grid, TextField } from '@mui/material'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const FormDryWeight = () => {
    return (
        <>
            <Box sx={{ mb: "15px" }} >
                <Grid
                    container
                    direction="row" >
                    <GridContainerCenter>
                        <TextField
                            id="outlined-basic"
                            label="Cestas"
                            type="number"
                            variant="outlined"
                            autoComplete="off"
                            sx={{ width: "80%" }}
                        />
                    </GridContainerCenter>
                    <GridContainerCenter>
                        <TextField
                            id="outlined-basic"
                            label="Tara"
                            type="number"
                            variant="outlined"
                            autoComplete="off"
                            sx={{ width: "80%" }}
                        />
                    </GridContainerCenter>
                </Grid>
            </Box>
        </>
    )
}

export default FormDryWeight

import React from 'react'

import Grid from '@mui/material/Grid';
import { H1, H2, H3, SH1 } from '../styledComponents/Heading'
import { BsPersonCircle } from 'react-icons/bs'
import Box from '@mui/material/Box';
import { PicturePerson } from './PicturePerson';
import { DataPerson } from './DataPerson';
import { TotalCount } from './TotalCount';
import { GridContainerCenter } from '../styledComponents/GridContainerCenter';


export const BoardTop = ({ employee, total }) => {

    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                    height: `${window.innerWidth < 540 ? '18%' : '40%'}`,
                    display: 'flex',
                }}
            >
                <GridContainerCenter item xs={3} lg={3}>
                    <PicturePerson />
                </GridContainerCenter>
                <GridContainerCenter item xs={6} lg={6}
                    container
                    direction="column">
                    <DataPerson employee={employee} />
                </GridContainerCenter>
                <GridContainerCenter item xs={3} lg={3}>
                    <TotalCount total={total} />
                </GridContainerCenter>

            </Grid>
        </>
    )
}


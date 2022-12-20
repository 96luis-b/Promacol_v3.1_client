import React from 'react'

import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import { CountTable } from './CountTable';
import Footer from '../styledComponents/Footer';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export const BoardBottom = ({ production, handleMoreLess, singleCount, groupCount, handleCleanSingleCount, handleCleanGroupCount, active }) => {
    return (
        <>
            <Container maxWidth="lg">
                <CountTable
                    production={production}
                    handleMoreLess={handleMoreLess}
                    singleCount={singleCount}
                    groupCount={groupCount}
                    handleCleanSingleCount={handleCleanSingleCount}
                    handleCleanGroupCount={handleCleanGroupCount}
                    active={active}
                />
            </Container>
        </>
    )
}

export default BoardBottom
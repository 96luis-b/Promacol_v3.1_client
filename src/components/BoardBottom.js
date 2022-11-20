import React from 'react'

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { H1, H2, H3, SH1 } from '../styledComponents/Heading'
import Container from '@mui/material/Container';


import { IoMdRemove } from 'react-icons/io';
import { FiPlus } from 'react-icons/fi';

import { CountTable } from './CountTable';

export const BoardBottom = ({production, handleMoreLess, singleCount, groupCount, handleCleanSingleCount, handleCleanGroupCount, active}) => {
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
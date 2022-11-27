import React from 'react'

import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
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
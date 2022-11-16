import React from 'react'
import { H2 } from '../../styledComponents/Heading';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { AssistanceColumn } from './Columns.js/AssistanceColumn';

export const HydratedWeightTable = () => {


    return (
        <div style={{ height: 370, width: '100%' }}>
            <Box sx={{ mb: '1rem' }}>
                <H2>Pesaje Hidratado</H2>
            </Box>
            <DataGrid
                rows={rows}
                columns={AssistanceColumn}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
            />
        </div>
    )
}





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
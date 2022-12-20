import React, { useCallback, useMemo } from 'react'

import { H2 } from '../../styledComponents/Heading';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

export const AssistanceTable = ({ row, nbRows, setRow, ckeckOut }) => {

    const deleteUser = useCallback(
        (id) => () => {
            ckeckOut(id)
            setRow((prevRows) => prevRows.filter((row) => row.id !== id));
        },
        [],
    );

    const columns = useMemo(
        () => [
            { field: 'id', headerName: 'Nro', width: 50 },
            { field: 'emp_code', headerName: 'Codigo', width: 90 },
            {
                field: 'fullName',
                headerName: 'Nombre completo',
                sortable: false,
                width: 230,
                valueGetter: (params) =>
                    `${params.getValue(params.id, 'name1') || ''} ${params.getValue(params.id, 'lastname1') || ''
                    }`,
            },
            {
                field: 'job',
                headerName: 'Puesto de trabajo',
                width: 140,
                editable: true,
                valueGetter: (params) =>
                    `${params.row.job.label || ''}`,
            },
            {
                field: 'date',
                headerName: 'Fecha',
                width: 95,
                editable: true,
            },
            {
                field: 'time',
                headerName: 'Hora',
                width: 75,
                editable: true,
            },
            {
                field: ' ',
                headerName: '',
                width: 95,
                editable: true,
                renderCell: (params) => [

                    <Stack direction="row" alignItems="center" spacing={1} key={params.row.id}>
                        <IconButton aria-label="delete" size="large" onClick={deleteUser(params.id)}>
                            <DeleteIcon fontSize="inherit" />
                        </IconButton>
                    </Stack>
                ],
            },
        ]
    )

    return (
        <div style={{ height: 370, width: "100%" }}>
            <Box sx={{ mb: '1rem' }}>
                <H2>Personal entrante</H2>
            </Box>
            <DataGrid
                rows={row.slice(0, nbRows)}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
            />
        </div>
    )
}


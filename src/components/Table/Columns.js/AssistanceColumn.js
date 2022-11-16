import React from 'react'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

export const AssistanceColumn = [
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
			headerName: 'aaaaa',
			width: 95,
			editable: true,
			renderCell: (params) => (
					<Stack direction="row" alignItems="center" spacing={1}>
						<IconButton aria-label="delete" size="large">
								<DeleteIcon fontSize="inherit"  onClick={()=>console.log("se a eliminado")}/>
						</IconButton>
	    			</Stack>
		    ),
		},
	]

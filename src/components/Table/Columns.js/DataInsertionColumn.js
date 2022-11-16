


export const DataInsertionColumn = [
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
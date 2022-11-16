import React from 'react'
import { Grid } from '@mui/material';


const baseColumnOptions = {
  sortable: false,
  pinnable: false,
  hideable: false,
};

export const PayrollColumn = [
  {
    field: 'date',
    headerName: 'Fecha',
    ...baseColumnOptions,
  },
  {
    field: 'fullName',
    headerName: 'FullName',
    ...baseColumnOptions,
    flex: 1,
    sortable: false,
  },
  {
    field: 'production',
    headerName: 'Production',
    flex: 1,
    ...baseColumnOptions,
    colSpan: ({ row }) => {
      return row.length;
    },

     renderCell: (params) => (
          <>
            <Grid container spacing={params.row.production.length}>
              {params.row.production.map((element) =>
                  <Grid item>
                    { `${element.prod_name}: ${element.quantity}` }
                  </Grid>
                )
              }
            </Grid>
          </>
        ),
  },
  {
    field: 'total',
    headerName: 'Total',
    flex: 1,
    ...baseColumnOptions,
  },
];
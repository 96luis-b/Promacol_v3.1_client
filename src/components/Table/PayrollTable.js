import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { PayrollColumn } from './Columns.js/PayrollColumn'

export default function PayrollTable({rows}) {
  return (
    <Box
      sx={{
        width: '80%',
        '& .bold': {
          fontWeight: 600,
        },
      }}
    >
      <DataGrid
        autoHeight
        disableExtendRowFullWidth
        disableColumnFilter
        disableSelectionOnClick
        hideFooter
        showCellRightBorder
        showColumnRightBorder
        columns={PayrollColumn}
        rows={rows}
      />
    </Box>
  );
}

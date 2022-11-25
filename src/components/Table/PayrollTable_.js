import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
];

export default function AcccessibleTable({ production }) {
  return (
    <TableContainer component={Paper} >
      <Table sx={{}} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Producción</TableCell>
            <TableCell>Total Bs</TableCell>
            <TableCell>Total unidades</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {production.map((row,j) => (
            <TableRow key={j}>
              <TableCell>{row.start_date}</TableCell>
              <TableCell>
                {row.detail.map((prod, i) => {
                  return <Box key={i}>
                      {prod.prod_name + ": " + prod.quantity}
                    </Box>
                })}
              </TableCell>
              <TableCell>{row.totalBs}</TableCell>
              <TableCell>{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

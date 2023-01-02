import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Grid from '@mui/material/Grid';

export default function PayrollEmployeeReport({ open, handleOpen, handleClose, data, datePayroll, timePayroll, time, date }) {
    console.log("data: ", data)
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth={"xl"}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Detalle de pago de nomina de destajo
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {`Fecha:${date}`}
                    </DialogContentText>
                    <DialogContentText>
                        {`Hora:${time}`}
                    </DialogContentText>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">Nro</TableCell>
                                    <TableCell align="right">Fecha de producción</TableCell>
                                    <TableCell align="right">Grupo</TableCell>
                                    <TableCell align="right">Codigo</TableCell>
                                    <TableCell align="center">Nombre completo</TableCell>
                                    <TableCell align="center">Cedula de identidad</TableCell>
                                    <TableCell align="center" colSpan={2}>Producto</TableCell>
                                    <TableCell align="center">Total Unidades</TableCell>
                                    <TableCell align="center">Total Bs</TableCell>
                                    <TableCell align="center">Total $</TableCell>
                                    <TableCell align="center">Bs pagados</TableCell>
                                    <TableCell align="center">$ pagados</TableCell>
                                </TableRow>
                            </TableHead>
                            {/* <TableBody> */}
                            {data.map((row, i) => {
                                return <TableBody key={i}>
                                    {
                                        row.payroll.map((r, j) => {
                                            let total_bs = 0, total_value = 0, total_dollar = 0, pay_bs = 0, pay_dollar = 0;
                                            return <TableRow
                                                key={j}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="right">{j + 1}</TableCell>
                                                <TableCell align="right">{r.date}</TableCell>
                                                <TableCell align="right">{row.job_name}</TableCell>
                                                <TableCell align="right">{row.emp_code}</TableCell>
                                                <TableCell align="right">{`${row.name1} ${row.name2} ${row.lastname1} ${row.lastname2}`}</TableCell>
                                                <TableCell align="right">{row.id_number}</TableCell>
                                                {r.payroll_detail.map((prod, z) => {
                                                    total_bs = parseFloat(total_bs) + parseFloat(prod.total_bs)
                                                    total_value = total_value + prod.quantity
                                                    return <TableCell align="right" key={z}>{`${prod.prod_name}: ${prod.quantity}`}</TableCell>
                                                })
                                                }
                                                <TableCell align="right">{total_value}</TableCell>
                                                <TableCell align="right">{parseFloat(r.total_bs).toFixed(2)}</TableCell>
                                                <TableCell align="right">{parseFloat(r.total_dollar).toFixed(2)}</TableCell>
                                                <TableCell align="right">{parseFloat(r.pay_bs).toFixed(2)}</TableCell>
                                                <TableCell align="right">{parseFloat(r.pay_dollar).toFixed(2)}</TableCell>

                                            </TableRow>
                                        })
                                    }
                                </TableBody>
                            })
                            }
                        </Table>
                    </TableContainer>
                </DialogContent>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                </Grid>
            </Dialog>
        </div>
    );
}

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

import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';



export default function ProductionReport({ open, handleOpen, handleClose, data, turnPage, group, date, time }) {
  let totalUnitGroup = 0, colSpan = 1;
  group[0].category.forEach(element => {
    // element.production?.length || 1
    if (element.production?.length > colSpan) {
      colSpan = element.production?.length
    }
  });
  let totalAmountProduct = []
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
          Producción general de destajo
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`Fecha:${date}`}
          </DialogContentText>
          <DialogContentText>
            {`Hora:${time}`}
          </DialogContentText>
          <TableContainer component={Paper}>
            <Table sx={{ width: "1000px" }} size="large" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Nro</TableCell>
                  <TableCell align="left">Grupo</TableCell>
                  <TableCell align="left">Codigo</TableCell>
                  <TableCell align="left">Nombre completo</TableCell>
                  <TableCell align="center" colSpan={colSpan}>Producto</TableCell>
                  <TableCell align="center">Total</TableCell>
                </TableRow>
              </TableHead>
              {group.map((row, i) => (
                <TableBody key={i}>
                  {row.category.map((elem, z, listCategory) => {
                    let totalUnit = 0
                    return <TableRow
                      key={z}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">{z + 1}</TableCell>
                      <TableCell align="left">{row.job_name}</TableCell>
                      <TableCell align="left">{elem.emp_code}</TableCell>
                      <TableCell align="left">{`${elem.name1} ${elem.name2} ${elem.lastname1} ${elem.lastname2}`}</TableCell>
                      {elem.production
                        ? elem.production.map((p, j, listProdProduction) => {
                          if (totalAmountProduct[j] == undefined) { totalAmountProduct[j] = 0 }
                          totalAmountProduct[j] += parseInt(p?.quantity || 0)
                          if (listProdProduction) totalUnit = parseInt(totalUnit) + parseInt(p?.quantity || 0)
                          if (j + 1 == listProdProduction?.length || false) { totalUnitGroup = parseInt(totalUnitGroup) + parseInt(totalUnit) }
                          // return <></>
                          return <TableCell align="center" key={j}>{`${p?.prod_name}: ${p?.quantity || 0}`}</TableCell>
                        })
                        : <TableCell align="center">---</TableCell>
                      }
                      <TableCell align="right">{totalUnit}</TableCell>
                    </TableRow>
                  })}
                </TableBody>
              ))}
            </Table>
            <Table sx={{ width: "1000px" }} size="large" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ background: "#00dfff" }} align="left" colSpan={5}>Total</TableCell>
                  {totalAmountProduct.map((amonutProd, y) => {
                    return <TableCell key={y} sx={{ background: "#00dfff", width: "85px" }} align="left">{amonutProd}</TableCell>
                  })
                  }
                  <TableCell sx={{ background: "#00dfff", width: "0" }} align="left">{totalUnitGroup}</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </DialogContent>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ marginBottom: "20px" }}
        >
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
          >
            <Button onClick={() => { turnPage("back") }}>Atras</Button>
            <Button onClick={() => { turnPage("next") }}>Siguiente</Button>
          </ButtonGroup>
        </Grid>
      </Dialog>
    </div>
  );
}

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { DialogContent, DialogContentText, DialogActions, ListItemButton, ListItemIcon, ListItemText, Grid } from '@mui/material';
import { H2, H3, H4, H5 } from '../../styledComponents/Heading';
import * as GoIcons from 'react-icons/go'
import { TextFieldSelect } from '../TextFieldSelect';
import * as AiIcons from 'react-icons/ai'


export default function ProdJobDialog({
    open,
    handleClickOpen,
    handleClose,
    data,
    options,
    option,
    handleChange,
    handleOpenConfirm,
    handleAddProdJob,
    handleRemoveProdJob
}) {



    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    <div>
                        <H3>Productos por puesto de trabajo</H3>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <div>
                        <H5>{data.job_name}</H5>
                    </div>
                    {data.products.map((prod, j) => {
                        return <ListItemButton key={j}>
                            <ListItemIcon>
                                <GoIcons.GoPrimitiveDot />
                            </ListItemIcon>
                            <ListItemText primary={`${prod.prod_name}`} />
                            <ListItemIcon sx={{ color: "red", fontSize: "20px" }} onClick={() => handleRemoveProdJob(data, prod)}>
                                <AiIcons.AiFillDelete />
                            </ListItemIcon>
                        </ListItemButton>
                    })
                    }
                    <Grid container my={4}>
                        <Grid item xs={8}>
                            <TextFieldSelect
                                options={options}
                                onChange={handleChange}
                                option={option}
                                width={"90%"}
                                label={"Unidades de producción"} />
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" onClick={() => handleAddProdJob(data, option)}>Agregar</Button>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    {/* <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose}>Agree</Button> */}
                </DialogActions>
            </Dialog>
        </>
    );
}

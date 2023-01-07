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


export default function ConfirmDialog({ open, handleClose, handleChange }) {

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    <H3>Confirme</H3>
                </DialogTitle>
                <DialogContent>
                    <H5>Presione "Confirmar" si desea mantener los cambios</H5>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleClose(true)}>Confirmar</Button>
                    <Button onClick={() => handleClose(false)}>Cancelar</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

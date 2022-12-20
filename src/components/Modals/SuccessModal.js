import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function SuccessDialog({ open, handleClickOpen, handleClose }) {

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          Chequeo de asistencia exitosa <CheckCircleOutlineIcon style={{color:"#33eb91"}}/>
        </DialogTitle>
      </Dialog>
    </div>
  );
}

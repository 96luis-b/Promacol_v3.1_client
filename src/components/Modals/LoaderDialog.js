import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { CircularProgress } from '@mui/material';

export default function LoaderDialog({ open, handleClose }) {

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth={"md"}
            >
                <DialogContent>
                    <CircularProgress />
                </DialogContent>
            </Dialog>
        </div>
    );
}

import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
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

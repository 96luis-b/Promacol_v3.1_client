import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Box, CircularProgress } from '@mui/material';

export default function LoaderDialog({ open, handleClose }) {

    return (
        <Box sx={{
            height: "100vh",
            width:"100%",
            display:`${open ? "flex" : "none"}`,
            justifyContent: "center",
            alignItems: "center",
            position:"absolute",
            top:"0px",
            left:"0px"
            }}>
                <CircularProgress />
        </Box >
    );
}

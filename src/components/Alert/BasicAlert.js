import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function BasicAlert({exp, title, descrip, obs}) {
    console.log("exp:", exp)
    console.log("title: ", title)
    console.log("descrip: ", descrip)
    console.log("obs: ", obs)
    const alerts = (exp) => {
        switch (exp) {
            case "error":
                console.log("error")
                return <Alert severity="error">
                    <AlertTitle>title</AlertTitle>
                    {descrip} <strong> — {obs}</strong>
                </Alert>
            case "warning":
                console.log("warning")
                return <Alert severity="warning">
                    <AlertTitle>title</AlertTitle>
                    {descrip}  <strong> — {obs}</strong>
                </Alert>
                break;
            case "info":
                return <Alert severity="info">
                    <AlertTitle>title</AlertTitle>
                    {descrip}<strong> — {obs}</strong>
                </Alert>
                break;
            case "success":
                return <Alert severity="success">
                    <AlertTitle>title</AlertTitle>
                    {descrip} <strong> — {obs}</strong>
                </Alert>
                break;
            default:
                break;
        }
    }

    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            {alerts(exp, title, descrip, obs)}
        </Stack>
    );
}

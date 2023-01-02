import { Grid, TextField } from "@mui/material";

export default function DateRange({handleChangeDate, today}) {
    return (
        <>
            <Grid item xs={6} sx={{ textAlign: 'end' }}>
                <TextField
                    id="start"
                    label="Desde"
                    type="date"
                    onChange={(e) => handleChangeDate("start", e.target.value)}
                    defaultValue={today}
                    InputLabelProps={{
                        shrink: true,
                    }} />
            </Grid>
            <Grid item xs={6} sx={{ textAlign: 'start' }}>
                <TextField
                    id="end"
                    label="Hasta"
                    type="date"
                    onChange={(e) => handleChangeDate("end", e.target.value)}
                    defaultValue={today}
                    InputLabelProps={{
                        shrink: true,
                    }} />
            </Grid>
        </>
    )
}
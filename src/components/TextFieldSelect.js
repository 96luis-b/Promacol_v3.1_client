import React from 'react'

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export const TextFieldSelect = ({ label, width, my, options, option, onChange }) => {
    return (
        <>
            <TextField
                select
                label={label}
                value={option || ""}
                onChange={(e)=>onChange("job", e.target.value)}
                sx={{ width: `${width}` || "70%", my: my || 0 }}
            >
                {options.length > 0 ?  options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))
                :null
                }
            </TextField>
        </>
    )
}
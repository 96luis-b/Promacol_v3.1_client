import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchInput({ onSubmit, onChange, value, width }) {
  return (
       <TextField 
        id="outlined-basic" 
        label="Buscar" 
        variant="outlined"
        autoComplete="off"
        value={value || ''}
        onKeyPress={(e)=> {if(e.key=="Enter"){onSubmit()}}}
        onChange={(e)=>onChange(e.target.value)}
        sx={{width: `${width || "10%"}`, background:"#fff", borderRadius:"5px", marginLeft:"20px"}}
        />
  );
}
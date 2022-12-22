import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';


export default function SearchInput({ onSubmit, onChange, value, width }) {
  return (
    <TextField
      id="outlined-basic"
      label="Buscar"
      variant="outlined"
      autoComplete="off"
      value={value || ''}
      onKeyPress={(e) => { if (e.key == "Enter") { onSubmit() } }}
      onChange={(e) => onChange(e.target.value)}
      sx={{ width: `${width || "100%"}`, background: "#fff", borderRadius: "5px", marginLeft: "20px" }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon onClick={() => onSubmit()} />
          </InputAdornment>
        ),
      }}
    />
  );
}
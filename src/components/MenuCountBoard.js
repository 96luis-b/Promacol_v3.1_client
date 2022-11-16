import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Checkbox, FormControlLabel } from '@mui/material';
import { CheckBox } from '@mui/icons-material';

export default function MenuCountBoard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls="fade-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ fontWeight: "600", fontSize: "24", color: "#fff" }}
      >
        Tableros de conteo
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {[1].map((element, index) => {
          return (
            <>
              <MenuItem>
                <FormControlLabel control={<Checkbox />} label="Label" />
              </MenuItem>
            </>
          )
        })}

      </Menu>
    </div>
  );
}

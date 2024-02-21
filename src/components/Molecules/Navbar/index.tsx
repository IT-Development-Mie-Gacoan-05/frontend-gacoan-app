// src/components/Navbar.tsx

import React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';

interface NavbarProps{
  handleDrawerOpen:()=> void;
}


const Navbar: React.FC<NavbarProps> = ({handleDrawerOpen}) => {
  return (
    <AppBar position="static">
      <Toolbar>
      <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            // sx={{
            //   marginRight: 5,
            //   ...(open && { display: 'none' }),
            // }}
          >
            <MenuIcon />
          </IconButton>
        <Typography variant="h6">Navbar</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

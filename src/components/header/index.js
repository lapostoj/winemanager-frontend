import React from 'react';
import { AppBar, Icon, Toolbar, Typography } from '@mui/material';
import logo from './grapes.svg';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Icon fontSize="large">
          <img id="logo" src={logo} height="35" alt="logo-raisins" />
        </Icon>
        <Typography variant="h6" color="inherit">
          Inventaire de cave
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

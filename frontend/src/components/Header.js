import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Link } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#95CFFF', boxShadow: 'none', padding: '0.5rem 1rem 0.5rem 0', margin:'0 0 0 0'}}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src="cymlogo.png" alt="Logo" style={{ marginRight: '1rem' }} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link href="#home" underline="none" sx={{ color: 'black', fontSize: '1.375rem', marginRight: '2rem' }}>
            Home
          </Link>
          <Link href="#about" underline="none" sx={{ color: 'black', fontSize: '1.375rem', marginRight: '2rem' }}>
            About
          </Link>
          <Link href="#events" underline="none" sx={{ color: 'black', fontSize: '1.375rem', marginRight: '2rem' }}>
            Events
          </Link>
          <Button variant="contained" href="https://linktr.ee/connectingyouthinmed" target="_blank" sx={{ backgroundColor: '#FFFBED', fontSize: '1.375rem', color: 'black', textTransform: 'none', borderRadius: '0.5rem', dropShadow:'none', '&:hover':{backgroundColor:'#fff0ba'} }}>
            Join
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Link } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#DAE7FF', boxShadow: 'none', padding: '1.5rem 2rem 1.5rem 0', margin:'0 0 0 0'}}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src="http://via.placeholder.com/50" alt="Logo" style={{ marginRight: '1rem' }} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link href="#" underline="none" sx={{ color: 'black', fontSize: '1.375rem', marginRight: '2rem' }}>
            About
          </Link>
          <Link href="#" underline="none" sx={{ color: 'black', fontSize: '1.375rem', marginRight: '2rem' }}>
            Events
          </Link>
          <Link href="#" underline="none" sx={{ color: 'black', fontSize: '1.375rem', marginRight: '2rem' }}>
            Community
          </Link>
          <Button variant="contained" sx={{ backgroundColor: '#A0C1FE', fontSize: '1.375rem', color: 'black', textTransform: 'none', borderRadius: '0.5rem', dropShadow:'none' }}>
            Join
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

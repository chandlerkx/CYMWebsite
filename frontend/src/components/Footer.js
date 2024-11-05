import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#4A5568',
        color: 'white',
        padding: '2rem',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on mobile
        justifyContent: 'space-between',
        alignItems: { xs: 'center', sm: 'flex-start' },
        textAlign: { xs: 'center', sm: 'left' },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: { xs: '1rem', sm: '0' } }}>
        <img src="http://via.placeholder.com/100" alt="Logo" style={{ marginRight: '2rem', width: '80px' }} />
      </Box>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', sm: 'flex-start' }, marginBottom: { xs: '1rem', sm: '0' } }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.25rem' }, marginBottom: '0.5rem' }}>Sponsors</Typography>
        <Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>spon1</Typography>
        <Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>spon2</Typography>
      </Box>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', sm: 'flex-start' }, marginBottom: { xs: '1rem', sm: '0' } }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.25rem' }, marginBottom: '0.5rem' }}>Partners</Typography>
        <Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>part1</Typography>
        <Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>part2</Typography>
        <Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>part3</Typography>
      </Box>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', sm: 'flex-start' }, marginBottom: { xs: '1rem', sm: '0' } }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.25rem' }, marginBottom: '0.5rem' }}>Sponsorships & Partnerships</Typography>
        <Link href="mailto:publicrelations.cym@gmail.com" sx={{ color: 'white', fontSize: { xs: '0.875rem', sm: '1rem' }, marginBottom: '0.5rem' }}>publicrelations.cym@gmail.com</Link>
        <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.25rem' }, marginBottom: '0.5rem' }}>General Inquiry</Typography>
        <Link href="mailto:connectinyouthinmed@gmail.com" sx={{ color: 'white', fontSize: { xs: '0.875rem', sm: '1rem' } }}>connectinyouthinmed@gmail.com</Link>
      </Box>
      
      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: { xs: '1rem', sm: '0' } }}>
        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" sx={{ color: 'white', marginRight: '1rem' }}>
          <InstagramIcon sx={{ fontSize: { xs: '2rem', sm: '3rem' } }} />
        </Link>
        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" sx={{ color: 'white' }}>
          <LinkedInIcon sx={{ fontSize: { xs: '2rem', sm: '3rem' } }} />
        </Link>
      </Box>
    </Box>
  );
}

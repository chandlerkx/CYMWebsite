import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#4A5568', color: 'white', padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img src="http://via.placeholder.com/100" alt="Logo" style={{ marginRight: '2rem' }} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography sx={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Sponsors</Typography>
        <Typography>spon1</Typography>
        <Typography>spon2</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography sx={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Partners</Typography>
        <Typography>part1</Typography>
        <Typography>part2</Typography>
        <Typography>part3</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography sx={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Sponsorships & Partnerships</Typography>
        <Link href="mailto:publicrelations.cym@gmail.com" sx={{ color: 'white', marginBottom: '0.5rem' }}>publicrelations.cym@gmail.com</Link>
        <Typography sx={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>General Inquiry</Typography>
        <Link href="mailto:connectinyouthinmed@gmail.com" sx={{ color: 'white' }}>connectinyouthinmed@gmail.com</Link>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" sx={{ color: 'white', marginRight: '1rem' }}>
          <InstagramIcon />
        </Link>
        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" sx={{ color: 'white' }}>
          <LinkedInIcon />
        </Link>
      </Box>
    </Box>
  );
}

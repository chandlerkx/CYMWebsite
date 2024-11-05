import React from 'react';
import { Box, Typography } from '@mui/material';

export default function EventCard({ imgFile, title, date, description }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, // Stacks on mobile (xs), horizontal on small screens and up
        marginTop: '3rem',
        marginBottom: '2rem',
        alignItems: { xs: 'center', sm: 'flex-start' }, // Center on mobile, align left on larger screens
      }}
    >
      <Box
        sx={{
          flex: '0 0 auto',
          width: { xs: '100%', sm: '31.188rem' }, // Full width on mobile
          height: { xs: 'auto', sm: '16.688rem' },
          borderRadius: '0.5rem',
          marginBottom: { xs: '1.5rem', sm: '0' }, // Space below image on mobile
          marginRight: { sm: '2rem' }, // Space to the right of image on larger screens
        }}
      >
        <img
          src={imgFile}
          alt="Event"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '0.5rem',
            objectFit: 'cover',
          }}
        />
      </Box>
      <Box sx={{ flex: '1 1 auto', textAlign: { xs: 'center', sm: 'left' } }}>
        <Typography
          sx={{
            color: 'black',
            fontSize: '2.188rem',
            fontWeight: 600,
            marginBottom: '0.5rem',
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: 'black',
            fontSize: '1.563rem',
            marginBottom: '1rem',
          }}
        >
          {date}
        </Typography>
        <Typography sx={{ color: 'black', fontSize: '1.25rem' }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

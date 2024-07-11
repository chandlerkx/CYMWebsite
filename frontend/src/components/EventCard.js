import React from 'react';
import { Box, Typography } from '@mui/material';

export default function EventCard({ imgFile, title, date, description }) {
  return (
    <Box sx={{ display: 'flex', marginBottom: '2rem', alignItems: 'flex-start' }}>
      <Box sx={{ flex: '0 0 auto', width: '200px', height: '150px', backgroundColor: '#D2E3FC', borderRadius: '0.5rem', marginRight: '2rem' }}>
        <img src={imgFile} alt="Event" style={{ width: '100%', height: '100%', borderRadius: '0.5rem', objectFit: 'cover' }} />
      </Box>
      <Box sx={{ flex: '1 1 auto' }}>
        <Typography sx={{ color: 'black', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          {title}
        </Typography>
        <Typography sx={{ color: 'black', fontSize: '1rem', marginBottom: '1rem' }}>
          {date}
        </Typography>
        <Typography sx={{ color: 'black', fontSize: '1rem' }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

import React, { PureComponent } from 'react';
import { Box, Typography } from '@mui/material';

export default class Branches extends PureComponent {
  render() {
    return (
      <div style={{ backgroundColor: '#E6EFFF', padding: '1rem 1rem 1rem 1rem' }}>
        <Typography sx={{ color: 'black', fontSize: '2rem', fontWeight: '500', marginBottom: '1rem', padding:'0 0 0 1.3rem' }}>
          Branches
        </Typography>
        <Typography sx={{ color: 'black', fontSize: '1rem', marginBottom: '2rem', padding:'0 0 0 1.3rem' }}>
          Some of our various future affiliations!!
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: '1rem' }}>
          <Box sx={{ backgroundColor: '#D2E3FC', borderRadius: '0.5rem', padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '10%' }}>
            <img src="http://via.placeholder.com/150" alt="Placeholder" style={{ borderRadius: '0.5rem' }} />
          </Box>
          <Box sx={{ backgroundColor: '#D2E3FC', borderRadius: '0.5rem', padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '10%' }}>
            <img src="http://via.placeholder.com/150" alt="Placeholder" style={{ borderRadius: '0.5rem' }} />
          </Box>
          <Box sx={{ backgroundColor: '#D2E3FC', borderRadius: '0.5rem', padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '10%' }}>
            <img src="http://via.placeholder.com/150" alt="Placeholder" style={{ borderRadius: '0.5rem' }} />
          </Box>
        </Box>
      </div>
    );
  }
}

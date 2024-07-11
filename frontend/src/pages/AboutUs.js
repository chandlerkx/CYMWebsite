import React, { PureComponent } from 'react';
import { Box, Typography } from '@mui/material';

export default class AboutUs extends PureComponent {
  render() {
    return (
      <div style={{ backgroundColor: '#E6EFFF', padding: '2rem' }}>
        <Typography sx={{ color: 'black', fontSize: '2rem', fontWeight: '500', marginBottom: '1rem' }}>
          About Us
        </Typography>
        <Box sx={{ backgroundColor: '#D2E3FC', borderRadius: '0.5rem', padding: '1.5rem' }}>
          <Typography sx={{ color: 'black', fontSize: '1.5rem', fontWeight: '500', marginBottom: '0.5rem' }}>
            Mission and Vision <span role="img" aria-label="rocket">🚀</span>
          </Typography>
          <Typography sx={{ color: 'black', fontSize: '1rem' }}>
            When most students hear the term “medicine,” they imagine careers like doctors or nurses, but don’t realize “medicine” also refers to fields such as biomedical engineering, bioethics, pharmaceutics, etc. Our goal is to redefine how the term “medicine” is interpreted. As our organization continues to grow, we envision building an unparalleled foundation for aspiring students in healthcare to explore and develop their interests.
          </Typography>
        </Box>
      </div>
    );
  }
}

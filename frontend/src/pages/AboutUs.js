import React, { PureComponent } from 'react';
import { Typography, Box } from '@mui/material';
import western from '../images/western.png';
import mac from '../images/mac.png';
import uoft from '../images/uoft.png';

const missionTitle = "Mission and Vision 🧬";
const missionMessage = "When most students hear the term “medicine,” they imagine careers like doctors or nurses, but don’t realize “medicine” also refers to fields such as biomedical engineering, bioethics, pharmaceutics, etc. Our goal is to redefine how the term “medicine” is interpreted. As our organization continues to grow, we envision building an unparalleled foundation for aspiring students in healthcare to explore and develop their interests.";

export default class AboutUs extends PureComponent {
  render() {
    return (
      <Box sx={{ backgroundColor: '#FFFBED', padding: { xs: '40px', sm: '80px' } }}>
        <Box sx={{ marginBottom: { xs: '24px', sm: '48px' } }}>
          <Typography fontWeight={600} fontSize={{ xs: '1.875rem', sm: '2.5rem' }} textAlign={{ xs: 'center', sm: 'left' }}>
            About Us
          </Typography>
        </Box>
        <Box
          sx={{
            borderRadius: '20px',
            marginBottom: { xs: '64px', sm: '128px' },
            padding: { xs: '30px', sm: '60px' },
            backgroundColor: '#FFF6D8',
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <Typography marginBottom={{ xs: '12px', sm: '24px' }} fontWeight={600} fontSize={{ xs: '1.5rem', sm: '1.875rem' }}>
            {missionTitle}
          </Typography>
          <Typography fontSize={{ xs: '1rem', sm: '1.875rem' }}>
            {missionMessage}
          </Typography>
        </Box>

        <Typography sx={{ color: 'black', fontSize: { xs: '2rem', sm: '2.5rem' }, fontWeight: '600', marginBottom: '1rem', textAlign: { xs: 'center', sm: 'left' } }}>
          Branches
        </Typography>
        <Typography sx={{ color: 'black', fontSize: { xs: '1rem', sm: '1.375rem' }, marginBottom: '2.4rem', textAlign: { xs: 'center', sm: 'left' } }}>
          Some of our various future affiliations!!
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            gap: { xs: '1rem', sm: '4.063rem' },
          }}
        >
          <Box sx={{ flex: 2, backgroundColor: '#D2E3FC', borderRadius: '1.563rem', padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', height: { xs: 150, sm: 300 } }}>
            <img src={western} alt="Western University" style={{ height: '90%', width: '100%', borderRadius: '0.5rem', objectFit: 'contain' }} />
          </Box>
          <Box sx={{ flex: 2, backgroundColor: '#D2E3FC', borderRadius: '1.563rem', padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', height: { xs: 150, sm: 300 } }}>
            <img src={mac} alt="McMaster University" style={{ height: '90%', width: '100%', borderRadius: '0.5rem', objectFit: 'contain' }} />
          </Box>
          <Box sx={{ flex: 2, backgroundColor: '#D2E3FC', borderRadius: '1.563rem', padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', height: { xs: 150, sm: 300 } }}>
            <img src={uoft} alt="University of Toronto" style={{ height: '90%', width: '100%', borderRadius: '0.5rem', objectFit: 'contain' }} />
          </Box>
        </Box>
      </Box>
    );
  }
}

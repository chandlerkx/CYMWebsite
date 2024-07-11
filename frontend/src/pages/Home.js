import React, { PureComponent } from 'react';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';

export default class Home extends PureComponent {
  render() {
    return (
      <div style={{ backgroundColor: '#E6EFFF', display: 'flex', justifyContent: 'space-between', padding: '2rem' }}>
        <div style={{ flex: 1 }}>
          <Typography sx={{ color: { xs: 'black', sm: 'blue', md: 'orange' }, fontSize: { xs: '2.5rem', sm: '2rem', md: '2rem' }, padding: '1.5rem', fontWeight: '500' }} variant='h1'>
            Welcome to Connecting Youth in Med
          </Typography>
          <Typography sx={{ color: { xs: 'black' }, fontSize: { xs: '1.2rem' }, padding: '0 1rem 0.5rem 1rem' }}>
            Federally incorporated and youth-led nonprofit organization. Established with a mission of supporting aspiring students in health-related fields by creating a gateway to discover knowledge, resources, and opportunities.
          </Typography>
          <Typography sx={{ color: { xs: 'black' }, fontSize: { xs: '1.2rem' }, padding: '0 1rem 1rem 1rem' }}>
            Since its establishment in 2021, CYM has supported over 5000 students as they embarked on their journey in the healthcare field.
          </Typography>
          <Button sx={{ backgroundColor: '#A0C1FE', margin: '0 1rem 2rem 1rem', padding: '0.5rem 1.7rem 0.5rem 1.7rem', textTransform: 'none', fontSize: '1rem', color: 'black', borderRadius: '0.7rem' }}>
            Join Now
          </Button>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="http://via.placeholder.com/300x400" alt="Placeholder" />
        </div>
      </div>
    );
  }
}

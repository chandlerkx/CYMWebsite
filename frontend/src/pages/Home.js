import React from 'react';
import { Button, Typography, Box, useMediaQuery, useTheme, Fade } from '@mui/material';

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        backgroundColor: '#E6EFFF',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        padding: '6rem 2rem 2rem 5rem',
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Fade in={true} timeout={1000}>
          <Typography
            sx={{
              color: { xs: 'black', sm: 'blue', md: 'black' },
              fontSize: { xs: '2.5rem', sm: '2rem', md: '2rem' },
              padding: { xs: '7rem 0rem 3rem 3rem', md: '8rem 0rem 3rem 3rem' },
              fontWeight: '520',
              fontFamily: 'Inter',
              fontSize:'3.75rem'
            }}
            variant="h1"
          >
            Welcome to Connecting Youth in Med
          </Typography>
        </Fade>
        <Fade in={true} timeout={1500}>
          <Typography
            sx={{
              color: { xs: 'black' },
              fontSize: { xs: '1.625rem' },
              padding: '0 1rem 1.8rem 3rem',
            }}
          >
            Federally incorporated and youth-led nonprofit organization. Established with a mission of supporting aspiring students in health-related fields by creating a gateway to discover knowledge, resources, and opportunities.
          </Typography>
        </Fade>
        <Fade in={true} timeout={2000}>
          <Typography
            sx={{
              color: { xs: 'black' },
              fontSize: { xs: '1.625rem' },
              padding: '0 1rem 2.1rem 3rem',
            }}
          >
            Since its establishment in 2021, CYM has supported over 5000 students as they embarked on their journey in the healthcare field.
          </Typography>
        </Fade>
        <Fade in={true} timeout={2500}>
          <Button
            sx={{
              backgroundColor: '#A0C1FE',
              margin: '1rem 1rem 14rem 3rem',
              padding: '0.8rem 3.5rem 0.8rem 3.5rem',
              textTransform: 'none',
              fontSize: '1.625rem',
              fontWeight: 600,
              color: 'black',
              borderRadius: '0.7rem',
            }}
          >
            Join Now
          </Button>
        </Fade>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: isMobile ? '2rem' : '0',
        }}
      >
        <img style={{margin:'4rem 0 0 0rem'}} src="http://via.placeholder.com/200x300" alt="Placeholder" />
      </Box>
    </Box>
  );
}

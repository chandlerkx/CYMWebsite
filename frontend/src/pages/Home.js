import React from 'react';
import { Button, Typography, Box, useMediaQuery, useTheme, Fade } from '@mui/material';

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        backgroundColor: '#FFFBED',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        padding: { xs: '3rem 1rem 2rem 1rem', sm: '6rem 2rem 2rem 5rem' },
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Fade in={true} timeout={1000}>
          <Typography
            sx={{
              color: 'black',
              fontSize: { xs: '2.5rem', sm: '3.4rem' },
              padding: { xs: '4rem 0rem 1rem 0rem', sm: '8rem 0rem 1rem 3rem' },
              fontWeight: 520,
              fontFamily: 'Inter',
              textAlign: { xs: 'center', sm: 'left' },
            }}
            variant="h1"
          >
            Welcome to
          </Typography>
        </Fade>
        <Fade in={true} timeout={1100}>
          <Typography
            sx={{
              color: 'black',
              fontSize: { xs: '2.5rem', sm: '3.4rem' },
              padding: { xs: '0rem 0rem 2rem 0rem', sm: '0rem 0rem 3rem 3rem' },
              fontWeight: 520,
              fontFamily: 'Inter',
              textAlign: { xs: 'center', sm: 'left' },
            }}
            variant="h1"
          >
            Connecting Youth in Med
          </Typography>
        </Fade>
        <Fade in={true} timeout={1500}>
          <Typography
            sx={{
              color: 'black',
              fontSize: { xs: '1.125rem', sm: '1.625rem' },
              padding: { xs: '0 1rem 1rem 1rem', sm: '0 1rem 1.8rem 3rem' },
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            Federally incorporated and youth-led nonprofit organization. Established with a mission of supporting aspiring students in health-related fields by creating a gateway to discover knowledge, resources, and opportunities.
          </Typography>
        </Fade>
        <Fade in={true} timeout={2000}>
          <Typography
            sx={{
              color: 'black',
              fontSize: { xs: '1.125rem', sm: '1.625rem' },
              padding: { xs: '0 1rem 2rem 1rem', sm: '0 1rem 2.1rem 3rem' },
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            Since its establishment in 2021, CYM has supported over 5000 students as they embarked on their journey in the healthcare field.
          </Typography>
        </Fade>
        <Fade in={true} timeout={2500}>
          <Button
            sx={{
              backgroundColor: '#FFF0BB',
              margin: { xs: '1rem auto 4rem', sm: '1rem 1rem 14rem 3rem' },
              padding: { xs: '0.6rem 2rem', sm: '0.8rem 3.5rem' },
              textTransform: 'none',
              fontSize: { xs: '1.125rem', sm: '1.625rem' },
              fontWeight: 600,
              color: 'black',
              borderRadius: '0.7rem',
              '&:hover': { backgroundColor: '#ffe99b' },
              display: 'block',
              textAlign: 'center',
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
        <Fade in={true} timeout={1500}>
          <img
            src="cymlogo2.png"
            alt="CYM Logo"
            style={{
              margin: isMobile ? '2rem 0 0 0' : '4rem 0 0 0rem',
              width: isMobile ? '80%' : '100%',
              maxWidth: '80%',
              paddingBottom:'15rem'
            }}
          />
        </Fade>
      </Box>
    </Box>
  );
}

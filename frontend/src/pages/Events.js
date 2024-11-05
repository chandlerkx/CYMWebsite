import React from 'react';
import { Box, Typography } from '@mui/material';
import EventCard from '../components/EventCard';

const events = [
  {
    imgFile: "gatewaytomed.png",
    title: "Gateway to Med",
    date: "January 23, 2025",
    description: "For many high school students, university applications can get very complicated when universities and colleges outline different application processes and requirements. Each year, CYM invites six to eight speakers across many health-related programs in Canada to provide insights on their programs' admission process, study methods, and life around their campuses."
  },
  {
    imgFile: "medtakeover3.png",
    title: "Med Takeover",
    date: "January 23, 2024",
    description: "CYM Med Takeover allows high school and university students interested in healthcare and medicine to get a glimpse into what a day is like as an upper year science student or as a professional working in the health industry – whether that be in healthcare, research, medical engineering, or health tech."
  },
  {
    imgFile: "craftforacause.png",
    title: "Craft with a Cause",
    date: "January 23, 2023",
    description: "CYM is proud to be in a community partnership with SickKids Foundation for over two years. We wish to positively impact the lives of children struggling with their health and offer any form of help and support! Craft for a cause marks our first in-person event since the lifting of COVID-19 restrictions. We invite many members of CYM to engage in in-person socials while assembling Christmas craft kits for children in the SickKids Hospital."
  },
  {
    imgFile: "walkathon.jpeg",
    title: "Dawn of CYM – Walkathon & Donations",
    date: "January 23, 2022",
    description: "Throughout the years 2020 and 2021, most Ontarians experienced what seemed like an endless cycle of lockdowns and re-openings. While following the health guidelines provided by Health Canada and local restrictions, CYM hosted Dawn of CYM – a month-long walkathon and charitable event promoting physical wellness. It allowed competing participants a chance to win many prizes through physical activity and donations."
  }
];

export default function Events() {
  return (
    <div style={{backgroundColor: '#FFFBED', padding: '80px'}}>
      <Box sx={{ backgroundColor: '#FFFBED'}}>
        <Typography sx={{ color: 'black', fontSize: '2.5rem', fontWeight: '600', marginBottom: '1rem' }}>  
          Events
        </Typography>
        <Typography sx={{ color: 'black', fontSize: '1.875rem', marginBottom: '1.5rem' }}>
          Upcoming Events
        </Typography>
        <EventCard {...events[0]} />
        <Typography sx={{ color: 'black', fontSize: '1.875rem', marginBottom: '1rem' }}>
          Past Events
        </Typography>
        <EventCard {...events[1]} />
        <EventCard {...events[2]} />
        <EventCard {...events[3]} />
      </Box>
    </div>
  );
}

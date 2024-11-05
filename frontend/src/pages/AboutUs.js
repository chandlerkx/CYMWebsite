// import React, { PureComponent } from 'react';
// import { Box, Typography } from '@mui/material';

// export default class AboutUs extends PureComponent {
//   render() {
//     return (
//       <div style={{ backgroundColor: '#E6EFFF', padding: '2rem' }}>
//         <Typography sx={{ color: 'black', fontSize: '2rem', fontWeight: '500', marginBottom: '1rem' }}>
//           About Us
//         </Typography>
//         <Box sx={{ backgroundColor: '#D2E3FC', borderRadius: '0.5rem', padding: '1.5rem' }}>
//           <Typography sx={{ color: 'black', fontSize: '1.5rem', fontWeight: '500', marginBottom: '0.5rem' }}>
//             Mission and Vision <span role="img" aria-label="rocket">🚀</span>
//           </Typography>
//           <Typography sx={{ color: 'black', fontSize: '1rem' }}>
//             When most students hear the term “medicine,” they imagine careers like doctors or nurses, but don’t realize “medicine” also refers to fields such as biomedical engineering, bioethics, pharmaceutics, etc. Our goal is to redefine how the term “medicine” is interpreted. As our organization continues to grow, we envision building an unparalleled foundation for aspiring students in healthcare to explore and develop their interests.
//           </Typography>
//         </Box>
//       </div>
//     );
//   }
// }

import React, { PureComponent } from 'react'
import { Button } from '@mui/material';
import {Typography, Box} from '@mui/material';
import western from '../images/western.png';
import mac from '../images/mac.png';
import uoft from '../images/uoft.png';

let missionTitle = "Mission and Vision 🧬"
let missionMessage = "When most students hear the term “medicine,” they imagine careers like doctors or nurses, but don’t realize “medicine” also refers to fields such as biomedical engineering, bioethics, pharmaceutics, etc. Our goal is to redefine how the term “medicine” is interpreted. As our organization continues to grow, we envision building an unparalleled foundation for aspiring students in healthcare to explore and develop their interests."

const ImageBlock = ({filepath}) => {
    // let "/"
    return (
        <div>
            <img src={western}/>
        </div>
    )
}

export default class AboutUs extends PureComponent{

    render() {
        return(
            <div style={{backgroundColor: '#FFFBED', padding: '80px'}}>
                <div style={{marginBottom: '48px'}}>
                    <Typography fontWeight={600} fontSize={'2.5rem'}>About Us</Typography>
                </div>
                <div style={{borderRadius: '20px', marginBottom: '128px', padding: '60px', backgroundColor: '#FFF6D8'}}>
                    <Typography marginBottom={'24px'} fontWeight={600} fontSize={'1.875rem'}>{missionTitle}</Typography>
                    <Typography fontSize={'1.875rem'}>{missionMessage}</Typography>
                    {/* <img src={western}></img>
                    <img src='/mac.png'/> */}
                </div>

                <Typography sx={{ color: 'black', fontSize: '2.5rem', fontWeight: '600', marginBottom: '1rem', }}>
          Branches
        </Typography>
        <Typography sx={{ color: 'black', fontSize: '1.375rem', marginBottom: '2.4rem',}}>
          Some of our various future affiliations!!
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '4.063rem' }}>
          <Box sx={{ flex: 2, backgroundColor: '#D2E3FC', borderRadius: '1.563rem', padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 300 }}>
            <img src="western.png" alt="Placeholder" style={{ height: '90%', width: '100%', borderRadius: '0.5rem', objectFit:'contain'}} />
          </Box>
          <Box sx={{ flex: 2, backgroundColor: '#D2E3FC', borderRadius: '1.563rem', padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '10%' }}>
            <img src="mac.png" alt="Placeholder" style={{ height: 'auto', width: '100%',borderRadius: '0.5rem', objectFit:'contain' }} />
          </Box>
          <Box sx={{ flex: 2, backgroundColor: '#D2E3FC', borderRadius: '1.563rem', padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '10%' }}>
            <img src="uoft.png" alt="Placeholder" style={{ height: 'auto', width: '100%',borderRadius: '0.5rem', objectFit:'contain' }} />
          </Box>
        </Box>

                {/* <div style={{marginBottom: '64px'}}>
                    <Typography fontWeight={600} variant='h3'>Branches</Typography>
                    <ImageBlock filepath={'test'}></ImageBlock>
                </div> */}
            </div>
        )
    }
}

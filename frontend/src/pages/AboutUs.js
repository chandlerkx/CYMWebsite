import React, { PureComponent } from 'react'
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import western from '../images/western.png';
import mac from '../images/mac.png';
import uoft from '../images/uoft.png';

let missionTitle = "Mission and Vision"
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
            <div style={{backgroundColor:'#E6EFEF', padding: '80px'}}>
                <div style={{marginBottom: '48px'}}>
                    <Typography fontWeight={600} variant='h3'>About Us</Typography>
                </div>
                <div style={{borderRadius: '20px', marginBottom: '128px', padding: '60px', backgroundColor: '#D8E6FF'}}>
                    <Typography marginBottom={'24px'} fontWeight={600} fontSize={30}>{missionTitle}</Typography>
                    <Typography fontSize={30}>{missionMessage}</Typography>
                    {/* <img src={western}></img>
                    <img src='/mac.png'/> */}
                </div>

                <div style={{marginBottom: '64px'}}>
                    <Typography fontWeight={600} variant='h3'>Branches</Typography>
                    <ImageBlock filepath={'test'}></ImageBlock>
                </div>
            </div>
        )
    }
}
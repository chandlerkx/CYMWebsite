import React, { PureComponent } from 'react'
import { Button } from '@mui/material';

export default class Home extends PureComponent {
  render() {
    return (
        <div>
            <h1>Welcome to Connecting Youth in Med</h1>
            <p>Federally incorporated and youth-led nonprofit organization. Established with a mission of supporting aspiring students in health-related fields by creating a gateway to discover knowledge, resources, and opportunities. </p>
            <p>Since its establishment in 2021, CYM has supported over 5000 students as they embarked on their journey in the healthcare field.</p>
            <Button>Join Now</Button>
        </div>
    )
  }
}

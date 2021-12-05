import React from 'react';
import { Box } from '@mui/material';
import Logo from '../images/cafe_logo512.png';

const Desktop = () => {

    return (
        <Box className="desktop">
            <div>
                <img src={Logo} alt="" />
                <span>This app is currently mobile only</span>
            </div>
        </Box>
    )
}

export default Desktop;
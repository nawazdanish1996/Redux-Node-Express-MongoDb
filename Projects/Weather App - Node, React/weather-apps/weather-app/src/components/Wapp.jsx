import "../css/Wapp.css";
import React from 'react';
import {
    Box,
    Typography,
} from '@mui/material';

const Wapp = () => {
  return (
    <Box sx={{mt: 5}}>
        <Box>
            <i className="fas fa-sun"></i>
        </Box>
        <Box>
            <Typography variant='h5'><i className="fas fa-street-view"></i>Pune, IN</Typography>
            <Typography>WED | OCT 23 : 10:49AM</Typography>
            <Typography variant='h4'>26.49*C</Typography>
            <Typography>Min 26.49*C | Max 26.49*C</Typography>
        </Box>
    </Box>
  )
}

export default Wapp
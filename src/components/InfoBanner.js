import React from 'react';
import { Grid2, Box, Typography } from '@mui/material';
import phoneIcon from '../assets/images/phone-icon.svg';
import mailIcon from '../assets/images/mail-icon.svg';
import locationIcon from '../assets/images/location-icon.svg';
import './navbar.css';

const InfoBanner = () => {

  return (
    <div className='infoBanner'>
        {/* Contact Info section */}
        <div>
            <Grid2 container spacing={4} justifyContent="center" sx={{ padding: '10px' }}>
                {/* First Column: Contact Form */}
                <Grid2 item="true" xs={12} sm={4} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <div>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <img src={phoneIcon} alt="Phone Icon" style={{ marginRight: '12px' }} /> 
                            <Typography
                              className='text-white'
                              variant="body1"
                            >
                                + 254 (0) 722 974 888
                            </Typography>
                        </Box>
                    </div>
                </Grid2>

                {/* Second Column: Physical Address */}
                <Grid2 item="true" xs={12} sm={4} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <div>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <img src={locationIcon} alt="Location Icon" style={{ marginRight: '12px' }} /> 
                            <Typography
                              className='text-white'
                              variant="body1"
                              title="15th Floor, Post Bank House, Banda Street, Nairobi, Kenya"
                            //   sx={{ maxWidth: '30vw'}}
                              sx={{
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                maxWidth: '30vw' // Set a maxWidth as needed
                              }}
                            >
                                15th Floor, Post Bank House, Banda Street, Nairobi, Kenya
                            </Typography>
                        </Box>
                    </div>
                </Grid2>

                {/* Third Column: Email*/}
                <Grid2 item="true" xs={12} sm={4} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <div>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <img src={mailIcon} alt="Email Icon" style={{ marginRight: '12px' }} /> 
                            <Typography
                              className='text-white'
                              variant="body1"
                            >
                                blockwebafrica0@gmail.com
                            </Typography>
                        </Box>
                    </div>
                </Grid2>
            </Grid2>
        </div>
    </div>
  );
};

export default InfoBanner;
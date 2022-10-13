import React from 'react';

import { Box, Grid, Container, Typography } from '@mui/material';

// PROJECT IMPORTS
import Timeline from './Timeline';

const RightSide = () => {
    return (
        <Box sx={{ padding: '60px 40px', color: '#323b4c' }}>
            <Box sx={{ mb: 5 }}>
                <Typography variant="h3" sx={{ fontWeight: 500, letterSpacing: 2, lineHeight: '100%' }}>
                    Mariana <span style={{ fontWeight: 400 }}>Anderson</span>
                </Typography>
                <Typography variant="h4" sx={{ fontSize: 30, fontWeight: 400 }} gutterBottom>
                    Marketing Manager
                </Typography>
                <Typography variant="body2" sx={{}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero
                    eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique feugiat. Mauris convallis, mi at mattis
                    malesuada, neque nulla volutpat dolor, hendrerit faucibus eros nibh ut nunc.
                </Typography>
            </Box>

            <Box className="experience">
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ mb: 3, fontWeight: 500, borderBottom: '1px solid #323b4c', padding: '0 0 10px 0' }}
                >
                    Experience
                </Typography>
                <Box
                    sx={{
                        position: 'relative',
                        pl: '25px',
                        '&::before': {
                            position: 'absolute',
                            content: '""',
                            top: 10,
                            left: 5,
                            width: '1px',
                            height: '100%',
                            background: '#323b4c'
                        }
                    }}
                >
                    <Box>
                        <Typography
                            variant="caption"
                            sx={{
                                position: 'relative',
                                '&::before': {
                                    position: 'absolute',
                                    content: '""',
                                    top: 1,
                                    left: -25,
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    background: '#fff',
                                    border: '1px solid #323b4c'
                                }
                            }}
                        >
                            2011 - present
                        </Typography>
                        <Typography variant="caption" sx={{ display: 'block' }}>
                            MAPLE l 123 Anywhere St., Any City
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom sx={{}}>
                            Web Programmer
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 5 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit
                            libero eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique feugiat. Mauris
                            convallis, mi at mattis malesuada, neque nulla volutpat dolor, hendrerit faucibus eros nibh ut nunc. Proin
                            luctus urna id nunc sagittis dignissim. Sed in libero sed libero dictum dapibus. Vivamus fermentum est eget
                            lorem aliquet, vel tempus metus dignissim. Donec risus arcu, tristique et sollicitudin blandit, iaculis ut nisl.
                            Integer rutrum ultricies fringilla.
                        </Typography>

                        <Typography
                            variant="caption"
                            sx={{
                                position: 'relative',
                                '&::before': {
                                    position: 'absolute',
                                    content: '""',
                                    top: 1,
                                    left: -25,
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    background: '#fff',
                                    border: '1px solid #323b4c'
                                }
                            }}
                        >
                            2019 - 2021
                        </Typography>
                        <Typography variant="caption" sx={{ display: 'block' }}>
                            Proweaver Inc. l 123 Anywhere St., Any City
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom sx={{}}>
                            Front-End Developer
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 5 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit
                            libero eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique feugiat. Mauris
                            convallis, mi at mattis malesuada, neque nulla volutpat dolor, hendrerit faucibus eros nibh ut nunc. Proin
                            luctus urna id nunc sagittis dignissim. Sed in libero sed libero dictum dapibus. Vivamus fermentum est eget
                            lorem aliquet, vel tempus metus dignissim. Donec risus arcu, tristique et sollicitudin blandit, iaculis ut nisl.
                            Integer rutrum ultricies fringilla.
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* <Timeline /> */}

            <Box className="Reference">
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ mb: 3, fontWeight: 500, borderBottom: '1px solid #323b4c', padding: '0 0 10px 0' }}
                >
                    Reference
                </Typography>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item sm={12} md={6} sm={6}>
                            <Typography variant="h6" sx={{ fontSize: 17 }}>
                                Jaffy Maglinte
                            </Typography>
                            <Typography variant="subtitle1" sx={{}} gutterBottom>
                                Web Programmer, MAPLE
                            </Typography>
                            <Typography variant="caption" sx={{}} gutterBottom>
                                <strong>Phone: </strong> +63-966-450-5714 <br />
                                <strong>Email: </strong> j.maglinte@maple.muramoto.com
                            </Typography>
                        </Grid>
                        <Grid item sm={12} md={6} sm={6}>
                            <Typography variant="h6" sx={{ fontSize: 17 }}>
                                Eunice Booc
                            </Typography>
                            <Typography variant="subtitle1" sx={{}} gutterBottom>
                                IT/Admin, Micro-Precision
                            </Typography>
                            <Typography variant="caption" sx={{}} gutterBottom>
                                <strong>Phone: </strong> +63-123-456-7890 <br />
                                <strong>Email: </strong> eunice@gmail.com
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default RightSide;

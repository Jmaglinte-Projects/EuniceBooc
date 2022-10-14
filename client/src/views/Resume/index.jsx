import React from 'react';

// MATERIAL IMPORTS
import { Box, Grid, Container, Typography } from '@mui/material';

// IMAGES

// PROJECT IMPORTS
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const index = () => {
    return (
        <Container sx={{ padding: '60px 0' }}>
            <Grid container alignItems="start">
                <Grid
                    item
                    sm={12}
                    md={4}
                    lg={4}
                    sx={{
                        backgroundColor: 'primary.main',
                        color: '#fff',
                        width: '100%',
                        borderRadius: 5,
                        boxShadow: 5
                    }}
                >
                    <LeftSide />
                </Grid>
                <Grid item sm={12} md={8} lg={8}>
                    <RightSide />
                </Grid>
            </Grid>
        </Container>
    );
};

export default index;

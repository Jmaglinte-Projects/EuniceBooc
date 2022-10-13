import React from 'react';
import { Box, Grid, Container, Typography } from '@mui/material';

// IMAGES
import profilePicture from 'assets/images/profile.jpg';

const LeftSide = () => {
    return (
        <Box>
            <Box sx={{ overflow: 'hidden', padding: '45px 25px', textAlign: 'center' }}>
                <img
                    src={profilePicture}
                    alt="Eunice Booc"
                    style={{ borderRadius: '50%', maxWidth: '200px', margin: 'auto', border: '4px solid #fff' }}
                />
            </Box>

            <Box sx={{ paddingLeft: '45px' }}>
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ mb: 3, fontWeight: 500, borderBottom: '1px solid #fff', padding: '0 0 10px 0' }}
                >
                    Contact
                </Typography>
                <Box>
                    <Typography variant="subtitle1" sx={{}}>
                        Phone
                    </Typography>
                    <Typography variant="subtitle2" sx={{ mb: 3 }} gutterBottom>
                        09664505714
                    </Typography>
                    <Typography variant="subtitle1" sx={{}}>
                        Email
                    </Typography>
                    <Typography variant="subtitle2" sx={{ mb: 3 }} gutterBottom>
                        h3ll0@mail.com
                    </Typography>
                    <Typography variant="subtitle1" sx={{}}>
                        Address
                    </Typography>
                    <Typography variant="subtitle2" sx={{ mb: 5 }} gutterBottom>
                        123 Anywhere St., LLC
                    </Typography>
                </Box>

                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ mb: 3, fontWeight: 500, borderBottom: '1px solid #fff', padding: '0 0 10px 0' }}
                >
                    Education
                </Typography>
                <Box>
                    <Typography variant="caption" sx={{}}>
                        2015-2019
                    </Typography>
                    <Typography variant="subtitle1">BS Information Technology</Typography>
                    <Typography variant="subtitle2" gutterBottom sx={{ mb: 3 }}>
                        ACLC College of Mandaue
                    </Typography>

                    <Typography variant="caption" sx={{}}>
                        2011-2015
                    </Typography>
                    <Typography variant="subtitle1">Secondary School</Typography>
                    <Typography variant="subtitle2" gutterBottom sx={{ mb: 3 }}>
                        Bateria National High School
                    </Typography>

                    <Typography variant="caption" sx={{}}>
                        2008-2011
                    </Typography>
                    <Typography variant="subtitle1">Primary School</Typography>
                    <Typography variant="subtitle2" gutterBottom sx={{ mb: 3 }}>
                        Opao Elementary School
                    </Typography>
                </Box>

                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ mb: 3, fontWeight: 500, borderBottom: '1px solid #fff', padding: '0 0 10px 0' }}
                >
                    Expertise
                </Typography>
                <Box>
                    <ul className="list">
                        <li>
                            <Typography variant="subtitle1">UI/UX</Typography>
                        </li>
                        <li>
                            <Typography variant="subtitle1">Virtual Design</Typography>
                        </li>
                        <li>
                            <Typography variant="subtitle1">PHP</Typography>
                        </li>
                        <li>
                            <Typography variant="subtitle1">Laravel</Typography>
                        </li>
                        <li>
                            <Typography variant="subtitle1">JavaScript</Typography>
                        </li>
                        <li>
                            <Typography variant="subtitle1">ReactJs</Typography>
                        </li>
                        <li>
                            <Typography variant="subtitle1">PostgreSql</Typography>
                        </li>
                    </ul>
                </Box>

                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ mb: 3, fontWeight: 500, borderBottom: '1px solid #fff', padding: '0 0 10px 0' }}
                >
                    Language
                </Typography>
                <Box>
                    <ul className="list">
                        <li>
                            <Typography variant="subtitle1">English</Typography>
                        </li>
                        <li>
                            <Typography variant="subtitle1">Tagalog</Typography>
                        </li>
                        <li>
                            <Typography variant="subtitle1">Bisdak</Typography>
                        </li>
                    </ul>
                </Box>
            </Box>
        </Box>
    );
};

export default LeftSide;

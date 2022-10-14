import React from 'react';
import { Box, Link, Grid, Container, Typography } from '@mui/material';

// IMAGES
import profilePicture from 'assets/images/profile.jpg';

const LeftSide = () => {
    const personalInformation = [
        {
            age: 23,
            dob: 'February 27, 1999',
            pob: 'Brgy. Mactan Lapu-Lapu City',
            sex: 'Female',
            citizenship: 'Filipino',
            height: "5'2",
            weight: '53kg.',
            civil_status: 'Single'
        }
    ];

    const contactInformation = [
        {
            phones: ['09229602981', '+63-956-078-0196'],
            email: 'eunicebooc@gmail.com',
            address: 'Zone 1, Buaya Lapu-lapu City, Cebu 6015'
        }
    ];

    const languages = ['English', 'Tagalog', 'Bisaya'];
    const skills = [
        'Basic in Programming and Web Developing (Vb.net, C, C++, HTML) ',
        'Basic knowledge in PC Troubleshooting (OS Installation) ',
        'Amateur in Animation and Photo Editing (Adobe Photoshop and Illustrator) ',
        'Excellent in Microsoft Office Applications (Word, Excel & Power Point) '
    ];
    const educationalAttainments = [
        {
            level: 'College',
            degree: 'Bachelor of Science in Information Technology',
            school: 'AMA Computer Learning Center (ACLC College of Mandaue)',
            address: 'Door FJ Northpoint Business Center, M.C. Briones St. Highway, Maguikay, Mandaue City',
            highest_rank: 'Cum Laude',
            from: 'June 2015',
            to: 'June 17, 2019'
        },
        {
            level: 'High School',
            school: 'Mactan National High School',
            address: 'Mactan Lapu-Lapu City',
            highest_rank: 'Cum Laude',
            from: 'June 2011',
            to: 'June 2015'
        },
        {
            level: 'Elementary',
            school: 'Buaya Elementary School',
            address: 'Zone 1, Buaya Lapu-Lapu City',
            highest_rank: 'Achiever',
            from: 'June 2005',
            to: 'June 2011'
        }
    ];

    return (
        <Box>
            <Box sx={{ overflow: 'hidden', padding: '45px 25px 30px', textAlign: 'center' }}>
                <img
                    src={profilePicture}
                    alt="Eunice Booc"
                    style={{ borderRadius: '50%', maxWidth: '200px', margin: 'auto', border: '4px solid #fff' }}
                />
            </Box>

            <Box sx={{ pl: '45px', pb: '60px' }}>
                <Typography
                    variant="h2"
                    gutterBottom
                    color="white"
                    sx={{ mb: 3, fontWeight: 500, borderBottom: '1px solid #fff', padding: '0 0 10px 0' }}
                >
                    Personal Information
                </Typography>

                {personalInformation.map((person, index) => {
                    return (
                        <Grid spacing={2} container key={index} sx={{ mb: 3, pr: 4 }}>
                            <Grid item sm={12} md={6} lg={6}>
                                <Typography variant="subtitle1" sx={{}} color="white">
                                    Age
                                </Typography>
                                <Typography variant="subtitle2" sx={{}} color="white">
                                    {person.age} years old
                                </Typography>
                            </Grid>
                            <Grid item sm={12} md={6} lg={6}>
                                <Typography variant="subtitle1" sx={{}} color="white">
                                    Date of Birth
                                </Typography>
                                <Typography variant="subtitle2" sx={{}} color="white">
                                    {person.dob}
                                </Typography>
                            </Grid>
                            <Grid item sm={12} md={6} lg={6}>
                                <Typography variant="subtitle1" sx={{}} color="white">
                                    Place of Birth
                                </Typography>
                                <Typography variant="subtitle2" sx={{}} color="white">
                                    {person.pob}
                                </Typography>
                            </Grid>
                            <Grid item sm={12} md={6} lg={6}>
                                <Typography variant="subtitle1" sx={{}} color="white">
                                    Sex
                                </Typography>
                                <Typography variant="subtitle2" sx={{}} color="white">
                                    {person.sex}
                                </Typography>
                            </Grid>
                            <Grid item sm={12} md={6} lg={6}>
                                <Typography variant="subtitle1" sx={{}} color="white">
                                    Citizenship
                                </Typography>
                                <Typography variant="subtitle2" sx={{}} color="white">
                                    {person.citizenship}
                                </Typography>
                            </Grid>

                            <Grid item sm={12} md={6} lg={6}>
                                <Typography variant="subtitle1" sx={{}} color="white">
                                    Height
                                </Typography>
                                <Typography variant="subtitle2" sx={{}} color="white">
                                    {person.height}
                                </Typography>
                            </Grid>

                            <Grid item sm={12} md={12} lg={12}>
                                <Typography variant="subtitle1" sx={{}} color="white">
                                    Weight
                                </Typography>
                                <Typography variant="subtitle2" sx={{}} color="white">
                                    {person.weight}
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Typography variant="subtitle1" sx={{}} color="white">
                                    Civil Status
                                </Typography>
                                <Typography variant="subtitle2" sx={{}} color="white">
                                    {person.civil_status}
                                </Typography>
                            </Grid>
                        </Grid>
                    );
                })}
                <Typography
                    variant="h2"
                    gutterBottom
                    color="white"
                    sx={{ mb: 3, fontWeight: 500, borderBottom: '1px solid #fff', padding: '0 0 10px 0' }}
                >
                    Contact Information
                </Typography>
                <Box sx={{ pr: 4 }}>
                    {contactInformation.map((contact, index) => {
                        return (
                            <Box key={index}>
                                <Typography variant="subtitle1" sx={{}} color="white">
                                    Phone
                                </Typography>
                                <Typography variant="subtitle2" sx={{ mb: 3 }} color="white" gutterBottom>
                                    {contact.phones.map((phone, index) => {
                                        return (
                                            <Link key={index} href={`tel: ${phone}`} color="inherit" sx={{ textDecoration: 'none' }}>
                                                {phone} {contact.phones.length >= 1 && index < 1 ? ' | ' : ''}
                                            </Link>
                                        );
                                    })}
                                </Typography>
                                <Typography variant="subtitle1" sx={{}} color="white">
                                    Email
                                </Typography>
                                <Typography variant="subtitle2" sx={{ mb: 3 }} color="white" gutterBottom>
                                    <Link href={`mailto: ${contact.email}`} color="inherit" sx={{ textDecoration: 'none' }}>
                                        {contact.email}
                                    </Link>
                                </Typography>
                                <Typography variant="subtitle1" sx={{}} color="white">
                                    Address
                                </Typography>
                                <Typography variant="subtitle2" sx={{ mb: 5 }} color="white" gutterBottom>
                                    {contact.address}
                                </Typography>
                            </Box>
                        );
                    })}
                </Box>

                <Typography
                    variant="h2"
                    gutterBottom
                    color="white"
                    sx={{ mb: 3, fontWeight: 500, borderBottom: '1px solid #fff', padding: '0 0 10px 0' }}
                >
                    Educational Attainment
                </Typography>
                <Box sx={{ pr: 4 }}>
                    {educationalAttainments.map((education, index) => {
                        return (
                            <Box key={index}>
                                <Typography variant="subtitle1" sx={{}} color="grey.100">
                                    {education.level}
                                </Typography>

                                <Typography variant="caption" sx={{}} color="grey.100">
                                    {education.from} - {education.to}
                                </Typography>

                                {education?.degree ? (
                                    <Typography variant="subtitle1" color="grey.100">
                                        {education.degree}
                                    </Typography>
                                ) : (
                                    ''
                                )}

                                <Typography variant="subtitle2" color="white" gutterBottom sx={{}}>
                                    {education.school}
                                </Typography>
                                <Typography variant="subtitle2" color="white" gutterBottom sx={{ mb: 3 }}>
                                    {education.address}
                                </Typography>
                            </Box>
                        );
                    })}

                    <Typography variant="caption" color="grey.100" sx={{}}>
                        2011-2015
                    </Typography>
                    <Typography variant="subtitle1" color="white">
                        Secondary School
                    </Typography>
                    <Typography variant="subtitle2" color="white" gutterBottom sx={{ mb: 3 }}>
                        Bateria National High School
                    </Typography>

                    <Typography variant="caption" color="grey.100" sx={{}}>
                        2008-2011
                    </Typography>
                    <Typography variant="subtitle1" color="white">
                        Primary School
                    </Typography>
                    <Typography variant="subtitle2" color="grey.100" gutterBottom sx={{ mb: 3 }}>
                        Opao Elementary School
                    </Typography>
                </Box>

                <Typography
                    variant="h2"
                    color="white"
                    gutterBottom
                    sx={{ mb: 3, fontWeight: 500, borderBottom: '1px solid #fff', padding: '0 0 10px 0' }}
                >
                    Expertise
                </Typography>
                <Box sx={{ pr: 4 }}>
                    <ul className="list">
                        {skills.map((skill, index) => {
                            return (
                                <li key={index}>
                                    <Typography variant="body1" color="white" gutterBottom>
                                        {skill}
                                    </Typography>
                                </li>
                            );
                        })}
                    </ul>
                </Box>

                <Typography
                    variant="h2"
                    color="white"
                    gutterBottom
                    sx={{ mb: 3, fontWeight: 500, borderBottom: '1px solid #fff', padding: '0 0 10px 0' }}
                >
                    Language
                </Typography>
                <Box>
                    <ul className="list">
                        {languages.map((languange, index) => {
                            return (
                                <li key={index}>
                                    <Typography variant="body1" color="white" gutterBottom>
                                        {languange}
                                    </Typography>
                                </li>
                            );
                        })}
                    </ul>
                </Box>
            </Box>
        </Box>
    );
};

export default LeftSide;

import React from 'react';

import { Box, Grid, Container, Typography, Link } from '@mui/material';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

// PROJECT IMPORTS
import Timeline from './Timeline';

const RightSide = () => {
    const experiences = [
        {
            position: 'Admin and Technical Support',
            company: 'Micro Precision Calibration Cebu Inc.',
            from: 'October 21, 2019',
            to: 'Present',
            address: 'Unit 201, IMEZ Bldg., Pueblo Verde, Osmeña, St., Basak, LLC.',
            job_description: [
                'Installing and configuring computer hardware, software, networks, printers, and scanners',
                'Troubleshoot internet problems, monitoring and maintaining computer systems and networks.',
                'Responding in a timely manner to service issues and requests',
                'Providing technical support across the company (this may be in person or over the phone/ through skype)',
                'Repairing and replacing equipment as necessary like CCTV DVR.',
                'Receives equipment and assist in the quality check of items',
                'Processes documentary requirements and coordinates delivery and pick-up activities and calibration schedule to customer and assigned technician',
                'Provides assistance in achieving high standards of quality assurance on calibrated/repaired items;',
                'Assists Team on performing internal quality audits; helps in the documentation and coordinates concerns as needed',
                'Creates and reviews calibration certificate;',
                'Conducts random functional testing inspection of equipment calibrated;',
                'Monitors the movement in/out of calibration standards used onsite;',
                'Performs final inspection before shipment of any items going out of the laboratory that was calibrated/ repaired with complete documentation;',
                'Assists in working lab environment to meet required calibration needs in accordance with our CSD and Quality Manual as well as industry standards;',
                'Coordinates with concerned personnel, department and customer concerns, requirements and other necessary information to ensure complete and on time delivery of products and services;',
                'Prepares needed reports in line with the covered functions and provide information needed by the department and other groups',
                'Provides on time operation support and other administrative and technical-related functions to sustain the regular operation of the company',
                'Collaborates with the team to achieve delivery schedule and manages task to accomplished assigned deadlines;',
                'Participates on the required training, seminars, workshops, programs and MPCI official activities;',
                'Works with the Department in setting general goals and develop and implement plans to hit identified targets; recommends improvement to support current operation and related processes;',
                'Observes safety precautions and quality standard in the performance of task and complies with the company directives and policies; observes proper communication practices and manages confidentiality of information within and outside the group;',
                'Performs other related tasks that maybe assigned from time to time or when needed.'
            ]
        },
        {
            position: 'Accounting/ IT Stafft',
            company: 'Joyland Industries Corporation',
            from: 'July 2019',
            to: 'October 2019',
            address: '#888 Cabahug Road, Brgy. Opao, Mandaue City, Cebu 6014',
            job_description: [
                'Responsible for maintaining the variety of records and files for documenting information;',
                'Answering the phone, responds to inquiries, and transferring calls;',
                'Assists other staff and/or personnel in supporting for the completion of their work activities;',
                'Handle the clerical work like data entry of daily sales through QuickBooks and others which are essential for completion of the job.',
                'Handle the clerical work like data entry of daily sales through QuickBooks and others which are essential for completion of the job.',
                'Organize, maintain file records and counter receipts of the payments.',
                'Encode, print and make copies of important documents. Operate office equipment such as copiers, printer and telephone system',
                'Process of payment, check customer’s trucking, release of cheque, and creating/issuance of 2307 to the customer.',
                'Perform other duties as assigned from time to time.'
            ]
        },
        {
            position: 'Administrative Section (On-the-Job Training) 500 hours',
            company: 'Pag-IBIG Fund Mandaue Branch',
            from: 'July 9, 2018',
            to: 'October 23, 2018',
            address: '3 RD Floor J Center Mall, 881 A.S Fortuna St. Tipolo, Mandaue City, Cebu 6014',
            job_description: [
                'Handle administrative tasks like answering telephone calls, filing documents and providing customer service.',
                'Perform data entry/ registration of client’s information to the system.',
                'Assists client for their inquiry about contributions and give other information.',
                'Perform assessment of the needs with the clients.',
                'Perform other duties as assigned from time to time',
                'Assists other staff and/or personnel in supporting for the completion of their work activities;'
            ]
        }
    ];

    const seminarsAttended = [
        {
            title: 'ICT SEMINAR WORKSHOP',
            description:
                '“Current Trends in ICT, Image Editing using Adobe Photoshop, Basic Video Editing using Sony Vegas, Android Programming and Web Designing using Word press”',
            date_accomplished: 'April 12, 2019'
        }
    ];

    const characterReferences = [
        {
            fullname: 'Josephus Pingoy',
            current_position: 'Tech Support I, IT Operation',
            company: 'Concentrix',
            phone: '09081686804',
            email: 'ephus123@gmail.com'
        },
        {
            fullname: 'Ricardo C. Pareja Jr.',
            current_position: 'Customer Service Assistant',
            company: 'Pag-IBIG Fund Mandaue Branch',
            phone: '09159831521',
            email: null
        },
        {
            fullname: 'Jaymar C. Paimalan, M.E',
            current_position: 'Senior Project Inspector',
            company: 'Hitachi Elevator Phils. Corporation',
            phone: '09178174151',
            email: null
        },
        {
            fullname: 'Rexan A. Ararao',
            current_position: 'Calibration Supervisor',
            company: 'Micro Precision Calibration Cebu Inc.',
            phone: '09453515435',
            email: null
        },
        {
            fullname: 'Jefferson J. Jamoralin',
            current_position: 'Administrative/Sales Supervisor',
            company: 'Micro Precision Calibration Cebu Inc.',
            phone: '0322343643',
            email: null
        }
    ];

    return (
        <Box sx={{ padding: '60px 40px' }}>
            <Box sx={{ mb: 5 }}>
                <Typography variant="h1" sx={{ fontWeight: 500, letterSpacing: 2, lineHeight: '100%' }}>
                    <Typography component="span" color="primary.main" sx={{ fontSize: 35, fontWeight: 500 }}>
                        Eunice
                    </Typography>{' '}
                    <span style={{ fontWeight: 400 }}>Booc</span>
                </Typography>

                <Typography variant="body2" sx={{ mb: 3 }}>
                    A Graduate of Bachelor of Science in Information Technology from AMA Computer Learning Center (ACLC College of Mandaue).
                    Effective in handling paper works, knows how to deal with people of various personalities, well-motivated, determined,
                    efficient and hardworking.
                </Typography>

                <Typography
                    variant="h2"
                    gutterBottom
                    sx={{ mb: 3, fontWeight: 500, borderBottom: '1px solid #323b4c', padding: '0 0 10px 0' }}
                >
                    Career Objective
                </Typography>
                <Typography variant="body2" sx={{}}>
                    Seeking for an opportunity and be part of a challenging and competitive institution and to learn and able to share my
                    educational experiences and skills about Information Technology, by being a competitive individual and dedicated to do
                    my work.
                </Typography>
            </Box>

            <Box className="experience">
                <Typography
                    variant="h2"
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
                            top: 40,
                            left: 4,
                            width: '1px',
                            height: '97%',
                            background: '#323b4c'
                        }
                    }}
                >
                    <Box>
                        <Box sx={{ mb: 5 }}>
                            <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
                                {experiences.map((experience, index) => {
                                    return (
                                        <Box key={index}>
                                            <ListItem
                                                alignItems="flex-start"
                                                sx={{
                                                    position: 'relative',
                                                    '&::before': {
                                                        position: 'absolute',
                                                        content: '""',
                                                        top: 30,
                                                        left: -24,
                                                        width: '8px',
                                                        height: '8px',
                                                        borderRadius: '50%',
                                                        background: '#fff',
                                                        border: '2px solid #323b4c'
                                                    }
                                                }}
                                            >
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <WorkIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <Box>
                                                    <ListItemText
                                                        primary="Admin and Technical Support"
                                                        secondary={
                                                            <React.Fragment>
                                                                {experience.from} - {experience.to}
                                                                <Typography variant="caption" sx={{ display: 'block' }}>
                                                                    {experience.company} | {experience.address}
                                                                </Typography>
                                                            </React.Fragment>
                                                        }
                                                    />

                                                    <Typography variant="h6" sx={{ display: 'block' }}>
                                                        Job Description:
                                                    </Typography>

                                                    <ul>
                                                        {experience.job_description.map((desc, index) => {
                                                            return (
                                                                <li key={index}>
                                                                    <Typography variant="body1" gutterBottom>
                                                                        {desc}
                                                                    </Typography>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </Box>
                                            </ListItem>
                                        </Box>
                                    );
                                })}
                            </List>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box className="seminarsAttended" sx={{ mb: 3 }}>
                <Typography
                    variant="h2"
                    gutterBottom
                    sx={{ mb: 3, fontWeight: 500, borderBottom: '1px solid #323b4c', padding: '0 0 10px 0' }}
                >
                    Seminars Conducted/Attended
                </Typography>

                {seminarsAttended.map((seminar, index) => {
                    return (
                        <Box key={index}>
                            <Typography variant="subtitle1" sx={{}}>
                                {seminar.title}
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom sx={{}}>
                                {seminar.date_accomplished}
                            </Typography>
                            <Typography variant="body1" sx={{}}>
                                {seminar.description}
                            </Typography>
                        </Box>
                    );
                })}
            </Box>

            <Box className="Reference">
                <Typography
                    variant="h2"
                    gutterBottom
                    sx={{ mb: 3, fontWeight: 500, borderBottom: '1px solid #323b4c', padding: '0 0 10px 0' }}
                >
                    Character References
                </Typography>
                <Box>
                    <Grid container spacing={2}>
                        {characterReferences.map((character, index) => {
                            return (
                                <Grid key={index} item sm={12} md={6} lg={6}>
                                    <Typography variant="h6" sx={{ fontSize: 17 }}>
                                        {character.fullname}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{}} gutterBottom>
                                        {character.current_position}
                                    </Typography>
                                    <Typography variant="caption" sx={{}} gutterBottom>
                                        <strong>Phone: </strong>{' '}
                                        <Link sx={{ textDecoration: 'none' }} href={`tel: ${character.phone}`}>
                                            {character.phone}
                                        </Link>{' '}
                                        <br />
                                        {character.email ? (
                                            <>
                                                <strong>Email: </strong>{' '}
                                                <Link sx={{ textDecoration: 'none' }} href={`mailto: ${character.email}`}>
                                                    {character.email}
                                                </Link>
                                            </>
                                        ) : (
                                            ''
                                        )}
                                    </Typography>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default RightSide;

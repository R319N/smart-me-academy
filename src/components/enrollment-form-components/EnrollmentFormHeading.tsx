import { Box, Breadcrumbs, Divider, Link, Stack, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import React from 'react'
import CustomizedSteppers from './CustomizedSteppers';
import GeneCardHeader from '../Headers/GeneCardHeader';
import { styles } from '@/styles/styles';
import Heading4 from '../UI/Heading4';
import Heading6 from '../UI/Heading6';
import InfoIcon from '@mui/icons-material/Info';
import pxToRem from '@/utils/darkTheme/functions/pxToRem';
import { grey } from '@mui/material/colors';


const breadcrumbsEN = [
    <Link underline="hover" key="1" color="inherit" href="/">
        Home
    </Link>,
    <Link underline="hover" key="1" color="inherit" href="/enroll-with-us?type=reenrolment">
        Re Enrollment
    </Link>,
    <Typography variant='body2' key="3" sx={{ color: 'secondary.main', fontWeight: "bold" }}>
        New Enrollment
    </Typography>,
];
const breadcrumbsRE = [
    <Link underline="hover" key="1" color="inherit" href="/">
        Home
    </Link>,
    <Link underline="hover" key="1" color="inherit" href="/enroll-with-us?type=enrolment">
        New Enrollment
    </Link>,
    <Typography variant='body2' key="3" sx={{ color: 'secondary.main', fontWeight: "medium" }}>
        Re Enrollment
    </Typography>,
];
export const EnrollmentFormHeading = () => {
    return (
        <Stack gap={4} my="2rem">
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcrumbsEN}
            </Breadcrumbs>
            <Heading6
                title='Enrollment Form'
                subTitle='fill the form to enroll a new student'
            />
            {/* <Divider /> */}
        </Stack>
    )
}
export const ReEnrollmentFormHeading = () => {
    return (
        <Stack gap={4} my="3rem">
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcrumbsRE}
            </Breadcrumbs>
            <Box>
                <Heading6
                    title='Re-Enrollment Form'
                    subTitle='fill the form to re enroll'
                />

                {/* <Box sx={{ display: "flex", alignItems:"center", my:"1rem" }}>
                    <InfoIcon />
                    <Typography variant='body2' color={grey[200]} sx={{ fontSize: pxToRem(8) }}>
                        note that this is for re-enrollment for students
                         who are already registered with the school, 
                         for new enrolment please navigate to new enrolment on the menu
                    </Typography>
                </Box> */}
            </Box>

        </Stack>
    )
}

import { Breadcrumbs, Divider, Link, Stack, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import React from 'react'
import CustomizedSteppers from './CustomizedSteppers';
import GeneCardHeader from '../Headers/GeneCardHeader';
import { styles } from '@/styles/styles';
import Heading4 from '../UI/Heading4';
import Heading6 from '../UI/Heading6';


const breadcrumbsEN = [
    <Link underline="hover" key="1" color="inherit" href="/">
        Home
    </Link>,
    <Link underline="hover" key="1" color="inherit" href="/enroll-with-us?type=reenrolment">
        Re Enrollment
    </Link>,
    <Typography key="3" sx={{ color: 'secondary.main' }}>
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
    <Typography key="3" sx={{ color: 'secondary.main' }}>
        Re Enrollment
    </Typography>,
];
export const EnrollmentFormHeading = () => {
    return (
        <Stack gap={2} my="2rem">
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
            <Divider />
        </Stack>
    )
}
export const ReEnrollmentFormHeading = () => {
    return (
        <Stack gap={2} my="2rem">
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcrumbsRE}
            </Breadcrumbs>
            <Heading6
                title='Re-Enrollment Form'
                subTitle='fill the form to enroll a new student'
            />
            <Divider />
        </Stack>
    )
}

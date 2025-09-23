import { Breadcrumbs, Divider, Link, Stack, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import React from 'react'
import CustomizedSteppers from './CustomizedSteppers';
import GeneCardHeader from '../Headers/GeneCardHeader';
import { styles } from '@/styles/styles';


const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
        Home
    </Link>,
    <Typography key="3" sx={{ color: 'text.primary' }}>
        New Enrollment
    </Typography>,
];

const EnrollmentFormHeading = () => {
    return (
        <Stack gap={2} my="2rem">
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
            <GeneCardHeader
                title='New Enrollment Form'
                subTitle='fill the form to enroll a new student'

            />
            <Divider/>
        </Stack>
    )
}

export default EnrollmentFormHeading
import { Breadcrumbs, Link, Stack, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import React from 'react'
import CustomizedSteppers from './CustomizedSteppers';
import GeneCardHeader from '../Headers/GeneCardHeader';
interface Props {
    activeStep: number
}

const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
        Home
    </Link>,
    <Typography key="3" sx={{ color: 'text.primary' }}>
        New Enrollment
    </Typography>,
];

const EnrollmentFormHeading: React.FC<Props> = ({ activeStep }) => {
    return (
        <Stack my="1rem" gap={3}>
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
            <CustomizedSteppers activeStep={activeStep} />
        </Stack>
    )
}

export default EnrollmentFormHeading
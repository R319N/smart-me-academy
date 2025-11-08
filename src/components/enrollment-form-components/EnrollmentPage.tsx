import { Box, Container } from '@mui/material'
import React from 'react'
import EnrollmentForm from './EnrollmentForm'
import ReEnrollmentForm from './ReEnrollmentForm';
import { useSearchParams } from 'next/navigation';
import { formSteps } from '@/utils/data/formSteps';

const EnrollmentPage = () => {
    const searchParams = useSearchParams();
    const mode = searchParams.get("type");

    const isReEnrolment = mode === "re-enrolment" || mode === "reenrolment";

    // remove "Documents Upload" (index 2)
    const steps = isReEnrolment
        ? formSteps.filter((_, index) => index !== 2)
        : formSteps;
    return (
        <Box my="14vh">
            <Container>
                <>
                    {mode === "reenrolment" ? (
                        <ReEnrollmentForm formSteps={steps} />
                    ) : (
                        <EnrollmentForm formSteps={steps} />
                    )}
                </>
            </Container>

        </Box>
    )
}

export default EnrollmentPage
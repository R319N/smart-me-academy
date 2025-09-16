import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

interface Props {
    activeStep: number
}
const steps = [
    "Student's Details",
    'Parent/Guardian Details',
    'Documents Upload',
    'Consent & Submit',
];
const CustomizedSteppers: React.FC<Props> = ({ activeStep }) => {
    return (
        <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    )
}

export default CustomizedSteppers
// import { Step, StepLabel, Stepper } from '@mui/material'
// import React from 'react'

// interface Props {
//     activeStep: number
// }
// const steps = [
//     "Student's Details",
//     'Parent/Guardian Details',
//     'Documents Upload',
//     'Consent & Submit',
// ];
// const CustomizedSteppers: React.FC<Props> = ({ activeStep }) => {
//     return (
//         <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
//             {steps.map((label) => (
//                 <Step key={label}>
//                     <StepLabel>{label}</StepLabel>
//                 </Step>
//             ))}
//         </Stepper>
//     )
// }

// export default CustomizedSteppers
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import InfoIcon from '@mui/icons-material/Info';
import DetailsIcon from '@mui/icons-material/Details';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import { Reviews } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import { StepContent, useMediaQuery } from '@mui/material';
interface Props {
    activeStep: number
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: "22%",
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: theme.palette.primary.main,
            // backgroundImage:
            //     'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            // backgroundImage:
            //     'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
            // backgroundColor: theme.palette.text.primary,
            backgroundColor: theme.palette.primary.main,
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        width: 2,
        border: 0,
        backgroundColor: theme.palette.text.primary,
        borderRadius: 1,
        ...theme.applyStyles('dark', {
            backgroundColor: theme.palette.grey[800],
        }),
    },
}));

const ColorlibStepIconRoot = styled('div')<{
    ownerState: { completed?: boolean; active?: boolean };
}>(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    zIndex: 1,
    color: "text.primary",
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.grey[300],
    }),
    variants: [
        {
            props: ({ ownerState }) => ownerState.active,
            style: {
                // backgroundImage:
                //     'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
                background: theme.palette.primary.main,
                boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
            },
        },
        {
            props: ({ ownerState }) => ownerState.completed,
            style: {
                // backgroundImage:
                //     'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
                background: theme.palette.primary.main
            },
        },
    ],
}));

function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    const icons: { [index: string]: React.ReactElement<unknown> } = {
        1: <InfoIcon />,
        2: <DetailsIcon />,
        3: <Reviews />,
    };

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

const steps = [
    "Student's Details",
    'Parent/Guardian Details',
    'Documents Upload',
    'Consent & Submit',
];

export default function CustomizedSteppers({ activeStep }: Props) {
    const theme = useTheme()

    const phone = useMediaQuery(theme.breakpoints.down("sm"))
    return (

        <Stepper
            orientation={phone ? "horizontal" : "vertical"}
            alternativeLabel={phone ? true : false}
            activeStep={activeStep}
            connector={<ColorlibConnector />}
        >
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    <StepContent>{label}</StepContent>
                </Step>
            ))}
        </Stepper>

    );
}

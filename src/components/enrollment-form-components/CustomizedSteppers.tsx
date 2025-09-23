import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepContent, Typography, useMediaQuery } from '@mui/material';
import { formSteps } from '@/utils/data/formSteps';
interface Props {
    activeStep: number
}

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: 'textSecondary',
    borderTopWidth: 3,
    borderRadius: 1,
    ...theme.applyStyles('dark', {
      borderColor: theme.palette.grey[800],
    }),
  },
}));

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: "22%",
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: theme.palette.primary.main,
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
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


export default function CustomizedSteppers({ activeStep }: Props) {
    const theme = useTheme();
    const phone = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            {/* Stepper */}
            <Stepper
                orientation={phone ? "horizontal" : "vertical"}
                alternativeLabel={phone}
                activeStep={activeStep}
                connector={<QontoConnector/>}
            >
                {formSteps.map((step, index) => (
                    <Step key={index} >
                        <StepLabel>{step.title}</StepLabel>
                        {/* Only show detail inside StepContent on desktop */}
                        {!phone && (
                            <StepContent>
                                <Typography variant="body2" color='textSecondary'>{step.detail}</Typography>
                            </StepContent>
                        )}
                    </Step>
                ))}
            </Stepper>

            {/* Detached Subheader for small devices */}
            {phone && (
                <Typography
                    variant="body2"
                    sx={{
                        mt: 2,
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        maxWidth: "90%",
                        mx: "auto",
                    }}
                >
                    {formSteps[activeStep]?.detail}
                </Typography>
            )}
        </>
    );
}



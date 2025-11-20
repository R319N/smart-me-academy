import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepContent, Typography, useMediaQuery } from '@mui/material';
import { formSteps } from '@/utils/data/formSteps';
import pxToRem from '@/utils/darkTheme/functions/pxToRem';
interface Props {

  activeStep: number;
  formSteps: { title: string; detail: string }[];
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
    borderColor: 'text.secondary',
    borderTopWidth: 3,
    borderRadius: 1,
    ...theme.applyStyles('dark', {
      borderColor: theme.palette.grey[800],
    }),
  },
}));



export default function CustomizedSteppers({ formSteps, activeStep }: Props) {
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("sm"));
  // const REformSteps = formSteps.filter(step => step.title !== "Documents Upload");

  return (
    <>
      {/* Stepper */}
      <Stepper
        orientation={phone ? "horizontal" : "vertical"}
        alternativeLabel={phone}
        activeStep={activeStep}
        connector={<QontoConnector />}
      >
        {formSteps.map((step, index) => (
          <Step key={index} >
            <StepLabel>{step.title}</StepLabel>
            {/* Only show detail inside StepContent on desktop */}
            {!phone && (
              <StepContent>
                <Typography variant="body2" color='text.secondary'>{step.detail}</Typography>
              </StepContent>
            )}
          </Step>
        ))}
      </Stepper>

      {/* Detached Subheader for small devices */}
      {phone && (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            my: pxToRem(20),
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            maxWidth: "90%",
            fontSize: pxToRem(9),
            fontStyle: "italic",
            fontWeight: (theme)=> theme.typography.fontWeightMedium,
            mx: "auto",
          }}
        >
          {formSteps[activeStep]?.detail}
        </Typography>
      )}
    </>
  );
}



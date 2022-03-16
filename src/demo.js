import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Rating from '@mui/material/Rating';
import { styled } from '@mui/system';


const CustomStepLabel = styled(StepLabel)({
  display: 'inline-flex',
  '.main': {
    margin: 0,
    display: 'flex',
    'flex-flow': 'row wrap',
    'justify-content': 'space-around',
  },
  '.left': {
    display: 'inline-block'
  },
});

const CustomBox = styled(Box)({
  maxWidth: '375px',
  backgroundColor: '#ccc',
  '.MuiStepConnector-vertical.Mui-disabled': {
    display: 'none'
  },
});

const steps = [
  {
    label: 'Day 1 <p> Well Done </p>',
    description: `Well Done!`,
    rating: 5,
  },
  {
    label: 'Day 2 <p> Well Done </p>',
    description: `Great Job!`,
    rating: 4,
  },
  {
    label: 'Day 3',
    description: `Need more inspiration? <p>try this master class from oprah winfrey</p> or this master class from Mama mia`,
    rating: 3,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <CustomBox sx={{ maxWidth: 400, padding: 2 }}>
      <h1>Authentic self -confidence</h1>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
      >
        {steps.map((step, index) => (
          <Step key={step.label}>
            <CustomStepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              <p className='main'>
                <p className='left'
                  dangerouslySetInnerHTML={{
                    __html: step.label
                  }}/>

                <p className='right'><Rating name="read-only" value={step.rating} readOnly /></p>
              </p>

            </CustomStepLabel>
            <StepContent>
              <Typography>
                <p className='left'
                  dangerouslySetInnerHTML={{
                    __html: step.description
                  }}
                />
              </Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </CustomBox>
  );
}

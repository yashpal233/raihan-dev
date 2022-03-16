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
import { Wrapper } from './index';

import ButtonBase from '@mui/material/ButtonBase';


const CustomStepLabel = styled(StepLabel)({
  // display: 'inline-flex',
  '.main': {
    margin: 0,
    display: 'flex',
    'flex-flow': 'row wrap',
    'justify-content': 'space-around',
  },
  '.left': {
    display: 'inline-block',
    minWidth: '100px'
  },
});

const steps = [
  {
    label: 'Day 1 <p> Well Done </p>',
    description: `Need more inspiration? <p>try this master class from oprah winfrey</p> or this master class from Mama mia`,
    rating: 5,
    images: [
      {
        url: 'https://ibb.co/ctDDcrN',
        title: 'MamaMia',
        width: '40%',
      }
    ]
  },
  {
    label: 'Day 2 <p> Well Done </p>',
    description: `Great Job!`,
    rating: 4,
    images: [
      {
        url: 'https://i.ibb.co/37Sw52k/istockphoto-1007763808-612x612.jpg',
        title: 'Relax',
        width: '40%',
      }
    ]
  },
  {
    label: 'Day 3',
    description: `Need more inspiration? <p>try this master class from oprah winfrey</p> or this master class from Mama mia`,
    rating: 3,
    images: [
      {
        url: 'https://i.ibb.co/37Sw52k/istockphoto-1007763808-612x612.jpg',
        title: 'Test',
        width: '40%',
      }
    ]
  },
];

const ImageButton = styled(ButtonBase)({
  position: 'relative',
  height: 50,
  [320]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
});

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
});

const ImageBackdrop = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: 'black',
  opacity: 0.4,
  transition: 'opacity',
});

const ImageMarked = styled('span')({
  height: 3,
  width: 18,
  backgroundColor: 'white',
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: 'opacity',
});


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
    <Wrapper>
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
              <div className='main'>
                <p className='left'
                  dangerouslySetInnerHTML={{
                    __html: step.label
                  }}/>

                <p className='right'><Rating name="read-only" value={step.rating} readOnly /></p>
              </div>

            </CustomStepLabel>
            <StepContent>
              <Typography>
                <p className='left'
                  dangerouslySetInnerHTML={{
                    __html: step.description
                  }}
                />
              </Typography>
              {step.images.map((image) => (
                <ImageButton
                  href='https://www.mamamia.com.au/podcasts/'
                  focusRipple
                  key={image.title}
                  style={{
                    width: image.width,
                  }}
                >
                  <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                      }}
                    >
                      {image.title}
                      <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                  </Image>
                </ImageButton>
              ))}
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
      <Button href='/#'>home page</Button>
    </Wrapper>
  );
}

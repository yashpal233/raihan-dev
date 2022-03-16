import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Landing from './landing';
import Demo from './demo';
import { styled } from '@mui/system';
import Intention from './intention';

export const Wrapper = styled('div')({
  maxWidth: '375px',
  // backgroundColor: '#ccc',
  border: '3px solid rgb(0, 98, 128)',
  borderRadius: '8px',
  padding: '10px',
  '.icon': {
    'padding-top': '5px',
    float: 'right',
  },
  '.heading': {
    marginBottom : '48px'
  },
  '.subHeading': {
    marginBottom : '48px'
  },
  '.bottomlinks': {
    fontSize: '24px',
    padding: '8px',
    borderBottom: '1px solid black',
    display: 'block',
    color: 'black',
    textDecoration: 'none'
  },
  '.MuiButton-contained': {
    backgroundColor: '#fdcc08',
    color: 'black',
  },
  '.MuiStepConnector-vertical.Mui-disabled': {
    display: 'none'
  },
  h1: {
    color: '#fdcc08',
    background: 'black',
    padding: '10px',
  },
  '.main': {
    display: 'flex',
    'flex-flow': 'row wrap',
    'justify-content': 'space-around',
  },
  '.left': {
    display: 'inline-block',
    minWidth: '100px'
  },
  '.listpoints': {
    marginBottom: '5px'
  }
});

const Index = () => {
  window.addEventListener('hashchange', () => {
    location.reload();
  }, true)

  return <StyledEngineProvider injectFirst>
  {location.hash === '' && <Landing />}
  {location.hash === '#intention' && <Intention />}
  {location.hash === '#demo' && <Demo />}
</StyledEngineProvider>;
}


ReactDOM.render(
  <Index />,
  document.querySelector("#root")
);
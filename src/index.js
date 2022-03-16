import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Landing from './landing';
import Demo from './demo';

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    {location.hash !== '#demo' && <Landing />}
    {location.hash === '#demo' && <Demo />}
  </StyledEngineProvider>,
  document.querySelector("#root")
);
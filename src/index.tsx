import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
// import { theme } from './materialUI/store';
import reportWebVitals from './reportWebVitals';

import { routes } from './router/Router';

import './index.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        {/* <ThemeProvider theme={theme}> */}
        {/* <CssBaseline /> */}
        <RouterProvider router={routes} />
        {/* </ThemeProvider> */}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

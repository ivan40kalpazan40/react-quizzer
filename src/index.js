import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import QuizzStateProvider from './context/quizzContext/quizzState';
import AuthStateProvider from './context/authContext/authState';
import App from './App';

ReactDOM.render(
  <AuthStateProvider>
    <QuizzStateProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QuizzStateProvider>
  </AuthStateProvider>,
  document.getElementById('root')
);

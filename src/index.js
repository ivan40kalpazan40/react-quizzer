import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import QuizzStateProvider from './context/quizzContext/quizzState';
import AuthStateProvider from './context/authContext/authState';
import AlertStateProvider from './context/alertContext/alertState';
import App from './App';

ReactDOM.render(
  <AuthStateProvider>
    <QuizzStateProvider>
      <AlertStateProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AlertStateProvider>
    </QuizzStateProvider>
  </AuthStateProvider>,
  document.getElementById('root')
);

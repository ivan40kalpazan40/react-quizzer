import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import QuizzStateProvider from './context/quizzContext/quizzState';
import App from './App';

ReactDOM.render(
  <QuizzStateProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QuizzStateProvider>,
  document.getElementById('root')
);

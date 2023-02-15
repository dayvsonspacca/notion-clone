import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import SignUp from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>
);


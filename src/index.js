import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
// import { CloudinaryContext } from "cloudinary-react";
import { DiscsProvider } from './contexts/DiscsContext';

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <DiscsProvider>
        <App />
      </DiscsProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

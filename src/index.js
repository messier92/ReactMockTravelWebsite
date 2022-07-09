import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// ** IMPORTANT ** 
// Some of the updated ReactJS packages aren't showing images properly.  
// In order for them to show up now, you have to write them in like this:
// src = {require('../images/img-9.jpg').default}
// src = {require('images/img-9.jpg').default}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

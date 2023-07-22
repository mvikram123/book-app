import React from 'react';
import ReactDOM from 'react-dom';
//import  BookApp  from './BookApp';
import BookApp from './BookApp';
import './index.css'; // If you have a separate CSS file

ReactDOM.render(
  <React.StrictMode>
    <BookApp />
  </React.StrictMode>,
  document.getElementById('root')
);
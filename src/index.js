import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name="Sarita Maurya";
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString();

ReactDOM.render(
  <div>
  <h1>Hello, My name is {name}</h1>
  <p>Current date is ={currDate}</p>
  <p>Current time is ={currTime}</p>
  </div>,
  document.getElementById('root')
  


);

import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import "./index.css"
import contextApiProvider from './ContextAPI';

// ReactDOM.render(<App/>,document.getElementById('root'))
ReactDOM.render(<contextApiProvider><App/></contextApiProvider>,document.getElementById('root'))

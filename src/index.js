import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/Welcome'
import App from './App'
import Next from './components/Next'
import {createStore} from 'redux'

ReactDOM.render(<App />, document.getElementById('root1'));
ReactDOM.render(<Welcome name = "Dikshita" />,document.getElementById('root'));
ReactDOM.render(<Next />,document.getElementById('root2'));

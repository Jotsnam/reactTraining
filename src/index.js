import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/Welcome'
import App from './components/App'
import Next from './components/Next'
import {createStore} from 'redux'
import rootReducer from './reducers/index'
import {Provider} from 'react-redux'

// single store which points at all reducers
const store = createStore(rootReducer);

// App component has access to all reducers using store
ReactDOM.render(
    <Provider store = {store}>
    <App />
    </Provider>,
document.getElementById('root'))


// ReactDOM.render(<App />, document.getElementById('root1'));
ReactDOM.render(<Welcome name = "Jotsna" />,document.getElementById('root1'));
ReactDOM.render(<Next />,document.getElementById('root2'));

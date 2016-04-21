import 'core-js/fn/object/assign';
import '../node_modules/react-bootstrap/dist/react-bootstrap.min.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));

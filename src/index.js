//Changed path of the App component
//This file tells the DOM to render the App component in the element with the id of "root"
// App component will contain all of the components that are going to be built

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
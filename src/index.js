import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './css/styles.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const Root = () => {
  return (
    <BrowserRouter basename='/atd/' >
      <App />
    </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import { render } from 'react-dom';
// import { hydrate, render } from 'react-dom';
// import { render } from 'react-snapshot';
import { BrowserRouter } from 'react-router-dom';

import './css/styles.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
    <BrowserRouter basename="/adt/">
      <App />
    </BrowserRouter>
  );
};

render(<Root />, document.getElementById('root'));
registerServiceWorker();

// const rootElement = document.getElementById('root');
// if (rootElement.hasChildNodes()) {
//   hydrate(<Root />, rootElement);
// } else {
//   render(<Root />, rootElement);
// }

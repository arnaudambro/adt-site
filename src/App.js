import React, { Component } from 'react';
import { Route } from 'react-router';
import Content from './components/Content';
import Header from './components/Header';

// import Landing from './components/Landing';

import './css/styles.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/*<Route exact path='/' render={() => <Landing />} />*/}
        <Content />
      </div>
    );
  }
}

export default App;

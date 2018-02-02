import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import Content from './components/Content';
import Landing from './components/Landing';
import { NavLink } from 'react-router-dom';
import menu from './data/menu';

import './css/styles.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showHeaderAndContent: false,
      showLanding: true,
      language: 'fr',
    }

    this.handleLandingAction = this.handleLandingAction.bind(this);
  }



  handleMaxScroll(max) {
    console.log(max);
  }

  handleLandingAction() {
    this.setState({ showLanding: !this.state.showLanding })
    this.setState({ showHeaderAndContent: !this.state.showHeaderAndContent })
  }

  componentWillMount() {
    //For reload : if we reload, no need the landing page anymore
    if (window.location.pathname !== '/atd/') {
      this.setState({ showLanding: !this.state.showLanding });
      this.setState({ showHeaderAndContent: !this.state.showHeaderAndContent });
    }
  }

  render() {

    return (
      <div className="App" onWheel={this.handleWheel}>
        {this.state.showLanding 
          ? <Route exact path='/' render={() => <Landing handleShow={this.handleLandingAction} />} />
          : <Route exact path='/' render={() => <Redirect to='/projets' />} />
        }
        {this.state.showHeaderAndContent 
         ? (
          <NavLink className="header__companyName" to={`/${menu.projets.fr}`} >
            <h1>
              <span>atelier</span>
              <span>delalande</span>
              <span>tabourin</span>
            </h1>
          </NavLink>
          ) : ''}
         {this.state.showHeaderAndContent 
          ? (
          <div className={`header__divider ${(window.location.pathname.split('/')[2] === Object.keys(menu)[1]) && "header__divider--long"}`} ></div>
          ) : ''}
          {this.state.showHeaderAndContent 
           ? (
          <ul className="header__menu menu__items">
          {Object
            .keys(menu)
            .map((key, index) => 
                <li 
                  key={index} 
                  className={`menu__items--item item ${index} ${menu[key].active ? 'active' : ''}`}>
                  <NavLink to={`/${key}`} activeClassName="active">{menu[key][`${this.state.language}`]}</NavLink>
                </li>
                )}
                
          </ul>
          ) : ''}
        {this.state.showHeaderAndContent ? <Content 
                                              language={this.state.language} /> : ''}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import Content from './components/Content';
import Landing from './components/Landing';
import { NavLink } from 'react-router-dom';
import menu from './data/menu';
import './css/styles.css';

require('smoothscroll-polyfill').polyfill();


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
    window.scroll({top: window.innerHeight, left:0, behavior: 'smooth' });
    this.setState({ showLanding: !this.state.showLanding });
    this.setState({ showHeaderAndContent: !this.state.showHeaderAndContent });
  }

  componentWillMount() {
    //For reload : if we reload, no need the landing page anymore
    if (window.location.pathname !== '/atd/') {
      this.setState({ showLanding: !this.state.showLanding });
      this.setState({ showHeaderAndContent: !this.state.showHeaderAndContent });
    }
  }

  render() {
    const showDatabase = (window.location.pathname.split('/')[2] === (Object.keys(menu)[1]));
    const showProjet = (window.location.pathname.split('/')[2] === ('projet'));
    const showLongDivider = showDatabase || showProjet;

    return (
      <div className={`App ${this.state.showHeaderAndContent ? "inPosition" : ""}`} onWheel={this.handleWheel}>
        <Route exact path='/' render={() => <Redirect to='/projets' />} />
        <Landing handleShow={this.handleLandingAction} />
        <NavLink className="header header__companyName" to={`/${menu.projets.fr}`} >
          <h1>
            <span>atelier</span>
            <span>delalande</span>
            <span>tabourin</span>
          </h1>
        </NavLink>
        <div className={`header header__divider ${showLongDivider && "header__divider--long"}`} ></div>
        <ul className="header header__menu menu__items">
        {Object
          .keys(menu)
          .map((key, index) => 
              <li 
                key={index} 
                className={`menu__items--item item ${index} ${menu[key].active ? 'active' : ''}`}>
                <NavLink to={`/${key}`} activeClassName="active"><span>{menu[key][`${this.state.language}`]}</span></NavLink>
              </li>
              )}
              
        </ul>
        <Content language={this.state.language} ref={(contentArea) => {this.contentArea = contentArea}}/>
      </div>
    );
  }
}

export default App;

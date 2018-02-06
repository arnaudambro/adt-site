import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import Content from './components/Content';
import Landing from './components/Landing';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import menu from './data/menu';
import './css/styles.css';
import hero from './img/hero_mobile.jpg';
import logo from './img/logo.jpg';

require('smoothscroll-polyfill').polyfill();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showHeaderAndContent: false,
      showLanding: true,
      language: 'fr'
    };

    this.handleLandingAction = this.handleLandingAction.bind(this);
  }

  handleLandingAction() {
    window.scroll({ top: window.innerHeight, left: 0, behavior: 'smooth' });
    this.setState({ showLanding: !this.state.showLanding });
    this.setState({ showHeaderAndContent: !this.state.showHeaderAndContent });
  }

  componentWillMount() {
    //For reload : if we reload, no need the landing page anymore
    if (window.location.pathname !== '/') {
      this.setState({ showLanding: !this.state.showLanding });
      this.setState({ showHeaderAndContent: !this.state.showHeaderAndContent });
    }
  }

  render() {
    const showDatabase =
      window.location.pathname.split('/')[1] === Object.keys(menu)[1];
    const showProjet = window.location.pathname.split('/')[1] === 'projet';
    const showLongDivider = showDatabase || showProjet;

    return (
      <div
        className={`App ${this.state.showHeaderAndContent ? 'inPosition' : ''}`}
        onWheel={this.handleWheel}
      >
        <Helmet>
          {/*<meta name="csrf-token" content="QOQMsvl4zbk2Pme4EMflnX6Rz3Ay8TBaleFkmw4f/xj/rjjRTBaY1SCxYbZloVkzLDwwd/4/VMiHB1XrUZXzeA==">*/}

          {/*<!-- COMMON TAGS -->*/}
          <title>
            Atelier Delalande Tabourin | Architecture + Material LAB + Design
          </title>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="icon" href={logo} type="image/jpg" />
          {/*<!-- Search Engine -->*/}
          <meta
            name="description"
            content="Architecture + Material LAB + Design "
          />
          <meta name="image" content={hero} />
          {/*<!-- Schema.org for Google -->*/}
          <meta itemprop="name" content="Atelier Delalande Tabourin" />
          <meta
            itemprop="description"
            content="Architecture + Material LAB + Design "
          />
          <meta itemprop="image" content={hero} />
          {/*<!-- Open Graph general (Facebook, Pinterest & Google+) -->*/}
          <meta property="og:title" content="Atelier Delalande Tabourin" />
          <meta
            property="og:description"
            content="Architecture + Material LAB + Design "
          />
          <meta
            property="og:image"
            content={`http://atelierdelalandetabourin.com/${hero}`}
          />
          <meta
            property="og:url"
            content="http://atelierdelalandetabourin.com/"
          />
          <meta
            property="og:site_property"
            content="Atelier Delalande Tabourin | Architecture + Material LAB + Design "
          />
          <meta property="og:locale" content="fr_FR" />
          <meta property="og:type" content="article" />
          <meta
            name="google-site-verification"
            content="Ka5ugOyxQ4SwwFupKsJ3udE7RQd85eyyTO7AS9vlASw"
          />
          <meta
            name="keywords"
            content="atelierdelalandetabourin,delalande,tabourin,architecture,architecturehautdegamme,architecte,jeune,agence,architectureinterieure,paysage,landart,atelier,hd11,pm19,eb12,ad38,vh16,vb229,paris,orleans,bretagne,granit,tuffeau,bois,accoya,barillet,brique,pierrecalcaire,béton,siegesocial,hotel,hotelcharme,hautdegamme,maison,,appartement,villa,logement,scenographie,rehabilitation,extension,surelevation,trophéebéton,meilleurdiplome,ecolespecialdarchitecture"
          />
          <link
            rel="canonical"
            href="http://www.atelierdelalandetabourin.com/"
          />
        </Helmet>
        <Route exact path="/" render={() => <Redirect to="/projets" />} />
        <Landing handleShow={this.handleLandingAction} />
        <NavLink
          className="header header__companyName"
          to={`/${menu.projets.fr}`}
        >
          <h1>
            <span>atelier</span>
            <span>delalande</span>
            <span>tabourin</span>
          </h1>
        </NavLink>
        <div
          className={`header header__divider ${showLongDivider &&
            'header__divider--long'}`}
        />
        <ul className="header header__menu menu__items">
          {Object.keys(menu).map((key, index) => (
            <li
              key={index}
              className={`menu__items--item item ${index} ${
                showProjet && key === 'projets' ? 'active' : ''
              }`}
            >
              <NavLink to={`/${key}`} activeClassName="active">
                <span>{menu[key][`${this.state.language}`]}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <Content
          language={this.state.language}
          ref={contentArea => {
            this.contentArea = contentArea;
          }}
        />
      </div>
    );
  }
}

export default App;

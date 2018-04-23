import React from 'react';
import { Switch, Route /*, Redirect*/ } from 'react-router';
import data_projets from '../data/data_projets';
import Projets from './Projets';
import Error404 from './Error404';
import Projet from './Projet';
import Database from './Database';
import News from './News';
import Agence from './Agence';
import Presse from './Presse';
require('smoothscroll-polyfill').polyfill();

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleArrowClick = this.handleArrowClick.bind(this);
    this.handleDatabaseWillMount = this.handleDatabaseWillMount.bind(this);
    this.passOrderingParametersToProjet = this.passOrderingParametersToProjet.bind(
      this
    );

    this.state = {
      database: false,
      orderingArray: null
    };
  }

  componentWillMount() {
    const arrayToShowInDatabase = Object.keys(data_projets).sort(
      (a, b) => (data_projets[a].winDate > data_projets[b].winDate ? -1 : 1)
    );
    this.setState({ orderingArray: [...arrayToShowInDatabase] });
  }

  handleDatabaseWillMount(databaseBoolean, projetBoolean: false) {
    this.setState({ database: databaseBoolean });
    this.props.showProjet(databaseBoolean, projetBoolean);
  }

  passOrderingParametersToProjet(params) {
    const lang = this.props.language;
    const arrayToShowInDatabase = Object.keys(data_projets).sort((a, b) => {
      if (data_projets[a][`${params.sortBy}`]) {
        if (
          data_projets[a][`${params.sortBy}`] >=
          data_projets[b][`${params.sortBy}`]
        ) {
          return params.ascendant ? 1 : -1;
        } else {
          return params.ascendant ? -1 : 1;
        }
      } else {
        if (
          data_projets[a][`${lang}`][`${params.sortBy}`] >
          data_projets[b][`${lang}`][`${params.sortBy}`]
        ) {
          return params.ascendant ? 1 : -1;
        } else {
          return params.ascendant ? -1 : 1;
        }
      }
    });

    this.setState({ orderingArray: [...arrayToShowInDatabase] });
  }

  handleArrowClick(ref) {
    ref.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  render() {
    const { language } = this.props;

    return (
      <div
        className={`contentGrid ${
          this.state.database ? 'database' : 'nodatabase'
        }`}
        ref={contentArea => {
          this.contentArea = contentArea;
        }}
      >
        <Switch>
          <Route
            path="/projets"
            render={() => (
              <Projets
                language={language}
                onarrowclick={this.handleArrowClick}
                willmount={this.handleDatabaseWillMount}
                orderingParameters={this.passOrderingParametersToProjet}
                ref={projets => {
                  this.projets = projets;
                }}
              />
            )}
          />
          <Route
            path="/database"
            render={() => (
              <Database
                language={language}
                onarrowclick={this.handleArrowClick}
                willmount={this.handleDatabaseWillMount}
                orderingParameters={this.passOrderingParametersToProjet}
                ref={database => {
                  this.database = database;
                }}
              />
            )}
          />
          <Route
            path="/news"
            render={() => (
              <News
                language={language}
                onarrowclick={this.handleArrowClick}
                willmount={this.handleDatabaseWillMount}
                ref={news => {
                  this.news = news;
                }}
              />
            )}
          />
          <Route
            path="/agence"
            render={() => (
              <Agence
                language={language}
                onarrowclick={this.handleArrowClick}
                willmount={this.handleDatabaseWillMount}
                ref={agence => {
                  this.agence = agence;
                }}
                parent={this.contentArea}
              />
            )}
          />
          <Route
            path="/presse"
            render={() => (
              <Presse
                language={language}
                onarrowclick={this.handleArrowClick}
                willmount={this.handleDatabaseWillMount}
                ref={presse => {
                  this.presse = presse;
                }}
              />
            )}
          />
          <Route
            path="/projet/:id"
            render={match => (
              <Projet
                match={match}
                language={language}
                onarrowclick={this.handleArrowClick}
                willmount={this.handleDatabaseWillMount}
                orderingArray={this.state.orderingArray}
                ref={projet => {
                  this.projet = projet;
                }}
              />
            )}
          />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

Content.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
};

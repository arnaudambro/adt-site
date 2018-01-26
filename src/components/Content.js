import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Projets from './Projets';
import Projet from './Projet';
import Database from './Database';
import News from './News';
import Agence from './Agence';
import Presse from './Presse';
// import data_projets from '../data/data_projets';

export default class Content extends React.Component {


  constructor (props) {
    super(props);
    this.state = {
      language: 'fr'
    };
  }

  render() {

    const { language } = this.state;

    return(
        <div className="contentGrid">
          <div className="contentArea" ref={area => this.area = area}>
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/projets' />} />
            <Route exact path='/projets' render={() => <Projets language={language} area={this.area} />} />
            <Route exact path='/ts_projets' render={() => <Database language={language} area={this.area} />} />
            <Route exact path='/news' render={() => <News language={language} area={this.area} />} />
            <Route exact path='/agence' render={() => <Agence language={language} area={this.area} />} />
            <Route exact path='/presse' render={() => <Presse language={language} area={this.area} />} />
            {/*<Route path='/projets/:id' render={() => <Projet language={language} area={this.area} />} />*/}
            <Route path='/projets/:id' render={(match) => <Projet match={match} language={language} area={this.area} />} />
          </Switch>
          </div>
        </div>
      )
  }
}

Content.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
}

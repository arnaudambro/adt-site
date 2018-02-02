import React from 'react';
import { Switch, Route/*, Redirect*/ } from 'react-router';
import Projets from './Projets';
import NoMatch from './NoMatch';
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

    this.state = {
      database: false,
    }
  }


  handleDatabaseWillMount(boolean) {
    this.setState({ database: boolean })
  }


  handleArrowClick(ref) {
    ref.scroll({top: 0, left:0, behavior: 'smooth' });
  }

  render() {

    const { language } = this.props;

    return(
        <div  
          className={`contentGrid ${this.state.database ? "database" : "nodatabase"}`} 
          ref={(contentArea) => { this.contentArea = contentArea }}>
          <Switch>
            <Route path='/projets' render={() => <Projets 
                                                    language={language} 
                                                    onarrowclick={this.handleArrowClick}
                                                    ref={projets => { this.projets = projets }} 
                                                  />} 
            />
            <Route path='/database' render={() => <Database 
                                                    language={language} 
                                                    onarrowclick={this.handleArrowClick}
                                                    willmount={this.handleDatabaseWillMount}
                                                    ref={database => { this.database = database }} 
                                                  />} 
            />
            <Route path='/news' render={() => <News 
                                                language={language} 
                                                onarrowclick={this.handleArrowClick}
                                                ref={news => { this.news = news }} 
                                              />} 
            />
            <Route path='/agence' render={() => <Agence 
                                                  language={language} 
                                                  onarrowclick={this.handleArrowClick}
                                                  ref={agence => { this.agence = agence }}
                                                  parent={this.contentArea} 
                                                />} 
            />
            <Route path='/presse' render={() => <Presse 
                                                  language={language} 
                                                  onarrowclick={this.handleArrowClick}
                                                  ref={presse => { this.presse = presse }} 
                                                />} 
            />
            <Route path='/projet/:id' render={(match) => <Projet 
                                                            match={match} 
                                                            language={language} 
                                                            onarrowclick={this.handleArrowClick}
                                                            willmount={this.handleDatabaseWillMount}
                                                            ref={projet => { this.projet = projet }} 
                                                          />} 
            />
            <Route component={NoMatch} />
          </Switch>
        </div>
      )
  }
}

Content.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
}

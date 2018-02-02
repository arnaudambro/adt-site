import React from 'react';
// import { Link } from 'react-router-dom';
import data_projets from '../data/data_projets';
import {Helmet} from "react-helmet";


export default class Projets extends React.Component {

  constructor(props) {
    super(props);

    this.handleScrollingClick = this.handleScrollingClick.bind(this);
  }

  componentDidMount() {
    this.props.area && this.props.area.scrollTo(0,0);
    this.props.willmount(true);
  }

  componentWillUnmount() {
    this.props.willmount(false);
  }

  handleScrollingClick() {
    this.props.onarrowclick(this.contentArea);
  }


  render() {

    const lang = this.props.language;
    const name = this.props.match.match.params.id;

    return(
        <div className="projet main__container" ref={(contentArea) => { this.contentArea = contentArea }}>
          <Helmet>
            <title>ATD | {data_projets[name].name.toUpperCase()}</title>
          </Helmet>
          {data_projets[name].component(lang, name)}
          <div className="main__container--marginbottom database" onClick={this.handleScrollingClick}></div>      
        </div>
      )
  }
}

Projets.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
}



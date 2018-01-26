import React from 'react';
// import { Link } from 'react-router-dom';
import data_projets from '../data/data_projets';

export default class Projets extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.area && this.props.area.scrollTo(0,0);
    this.props.match ? console.log(this.props.match) : console.log('no params');;
    this.props.match.params ? console.log(this.props.match.params) : console.log('no params');;
  }

  render() {

    const lang = this.props.language;
    const name = this.props.match.match.params.id;

    return(
        <div className="projet main__container">
          {this.props.match ? data_projets[name].component(lang, name) : 'nothing to show'}

        </div>
      )
  }
}

Projets.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
}



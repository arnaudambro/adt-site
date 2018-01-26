import React from 'react';
import data_presse from '../data/data_presse';

export default class Presse extends React.Component {

  componentDidMount() {
    this.props.area && this.props.area.scrollTo(0,0);
  }

  render() {


    return(


      <div className="presse__container main__container">
        {Object
          .keys(data_presse)
          .sort((a, b) => data_presse[a].date > data_presse[b].date ? -1 : 1)
          .map((key, index) => {
          return data_presse[key].component(this.props.language, index)
        })}
      </div>
      )
  }
}

Presse.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
}

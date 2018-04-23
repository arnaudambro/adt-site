import React from 'react';
import data_presse from '../data/data_presse';
import { Helmet } from 'react-helmet';

export default class Presse extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onarrowclick(this.contentArea);
  }

  componentDidMount() {
    this.props.willmount(false);
  }

  render() {
    return (
      <div
        className="presse__container main__container"
        ref={contentArea => {
          this.contentArea = contentArea;
        }}
      >
        <Helmet>
          <title>ADT | Presse</title>
        </Helmet>
        {Object.keys(data_presse)
          .sort((a, b) => (data_presse[a].date > data_presse[b].date ? -1 : 1))
          .map((key, index) => {
            return data_presse[key].component(this.props.language, index);
          })}
        <div
          className="main__container--marginbottom presse"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

Presse.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
};

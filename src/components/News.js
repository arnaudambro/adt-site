import React from 'react';
import data_news from '../data/data_news';
import { Helmet } from 'react-helmet';

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.willmount(false);
  }

  handleClick(e) {
    this.props.onarrowclick(this.contentArea);
  }

  render() {
    return (
      <div
        className="news__container main__container"
        ref={contentArea => {
          this.contentArea = contentArea;
        }}
      >
        <Helmet>
          <title>ADT | News</title>
        </Helmet>
        {Object.keys(data_news)
          .sort((a, b) => (data_news[a].date > data_news[b].date ? -1 : 1))
          .map((key, index) => {
            return data_news[key].component(this.props.language, index);
          })}
        <div
          className="main__container--marginbottom news"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

News.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
};

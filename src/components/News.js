import React from 'react';
import data_news from '../data/data_news';

export default class News extends React.Component {

  componentDidMount() {
    this.props.area && this.props.area.scrollTo(0,0);
  }

  render() {


    return(


      <div className="news__container main__container">
      {Object
        .keys(data_news)
        .sort((a, b) => data_news[a].date > data_news[b].date ? -1 : 1)
        .map((key, index) => {
        return data_news[key].component(this.props.language, index)
      })}
      </div>
      )
  }
}

News.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
}

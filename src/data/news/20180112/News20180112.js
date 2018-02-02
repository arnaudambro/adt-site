import React from 'react';
import './News20180112.css';
import picture3 from './picture3.jpg';
import hiver2018 from './hiver2018.jpg';

export default class News20180112 extends React.Component {

  render() {

    const content = {
      date: {
        en() { 
          const date = new Date(2018, 0, 12)
          return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        },
        fr() { 
          const date = new Date(2018, 0, 12)
          return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
        }
      },
      dateSubtitle: {
        en: {
          __html: `Winter walk<br />Valgrisenche, Italie`
        },
        fr: {
          __html: `Promenade hivernale<br />Valgrisenche, Italie`
        }
      },
      description: {
        en: 'Not the same vision of the human scale up there.',
        fr: 'Pas la même vision de l’échelle humaine de là haut.'
      }
    }

    return(
      <div className="news__20180112--content news__content  main__content">
        <div 
          className="news__20180112--pic1"
          style={{ backgroundImage: `url(${hiver2018}) `}}
          title="hiver 2018">
        </div>
        <div 
          className="news__20180112--pic2"
          style={{ backgroundImage: `url(${picture3}) `}}
          title="plan architectural">
        </div>
        <div className="news__20180112--column3--container column3--container active">
          <div className="news__20180112--column3">
            <div className="news__20180112--date">{content.date[this.props.language]()}</div>
            <div className="news__20180112--date--datesubtitle" dangerouslySetInnerHTML={content.dateSubtitle[this.props.language]}></div>
            <div className="news__20180112--date--description">{content.description[this.props.language]}</div>
          </div>
        </div>
      </div>
      )
  }
}

News20180112.propTypes = {
  // language: React.PropTypes.string.isRequired,
}


import React from 'react';
import './News20180102.css';
import pic from './atelierdelalandetabourin-hotel-morbihan-pierre-HD11-salon.jpg';

export default class News20180102 extends React.Component {

  render() {

    const content = {
      date: {
        en() { 
          const date = new Date(2018, 0, 2)
          return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        },
        fr() { 
          const date = new Date(2018, 0, 2)
          return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
        }
      },
      dateSubtitle: {
        en: {
          __html: `Building permit accepted HD11`
        },
        fr: {
          __html: `Permis de construire accepté HD11`
        }
      },
      // description: {
      //   en: 'Not the same vision of the human scale up there.',
      //   fr: 'Pas la même vision de l’échelle humaine de là haut.'
      // }
    }

    return (
      <div className="news__20180102--content news__content main__content">
        <div 
          className="news__20180102--pic1"
          style={{ backgroundImage: `url(${pic}) `}}
          title="chantier de la maison privée">
        </div>
        <div className="news__20180102--column3--container column3--container active">
          <div className="news__20180102--column3">
            <div className="news__20180102--date">{content.date[this.props.language]()}</div>
            <div className="news__20180102--date--datesubtitle" dangerouslySetInnerHTML={content.dateSubtitle[this.props.language]}></div>
            {/*<div className="news__20180102--date--description">{content.description[this.props.language]}</div>*/}
          </div>
        </div>
      </div>
      )
  }
}

News20180102.propTypes = {
  // language: React.PropTypes.string.isRequired,
}


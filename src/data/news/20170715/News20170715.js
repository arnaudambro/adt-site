import React from 'react';
import './News20170715.css';
import pic from './atelierdelalandetabourin-news-HD11.jpg';

export default class News20170715 extends React.Component {

  render() {

    const content = {
      date: {
        en() { 
          const date = new Date(2017, 6, 15)
          return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        },
        fr() { 
          const date = new Date(2017, 6, 15)
          return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
        }
      },
      dateSubtitle: {
        en: {
          __html: `New project !!<br /> Extension and Rehabilitation of a 3* hotel in 4*`
        },
        fr: {
          __html: `Nouveau projet !!<br /> Extension et Réhabilitation d’un hôtel 3* en 4*`
        }
      },
      // description: {
      //   en: 'Not the same vision of the human scale up there.',
      //   fr: 'Pas la même vision de l’échelle humaine de là haut.'
      // }
    }

    return (
      <div className="news__20170715--content news__content main__content">
        <div 
          className="news__20170715--pic1"
          style={{ backgroundImage: `url(${pic}) `}}
          title="chantier de la maison privée">
        </div>
        <div className="news__20170715--column3--container column3--container active">
          <div className="news__20170715--column3">
            <div className="news__20170715--date">{content.date[this.props.language]()}</div>
            <div className="news__20170715--date--datesubtitle" dangerouslySetInnerHTML={content.dateSubtitle[this.props.language]}></div>
            {/*<div className="news__20170715--date--description">{content.description[this.props.language]}</div>*/}
          </div>
        </div>
      </div>
      )
  }
}

News20170715.propTypes = {
  // language: React.PropTypes.string.isRequired,
}


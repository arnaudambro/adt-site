import React from 'react';
import './News20161214.css';
import pic from './atelierdelalandetabourinnewsscierieeb12.png';

export default class News20161214 extends React.Component {

  render() {

    const content = {
      date: {
        en() { 
          const date = new Date(2016, 11, 14)
          return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        },
        fr() { 
          const date = new Date(2016, 11, 14)
          return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
        }
      },
      dateSubtitle: {
        en: {
          __html: `Visit of the sawmill of Vitry-aux-Loges for the project of the company B.`
        },
        fr: {
          __html: `Visite de la scierie de Vitry-aux-Loges pour le projet de l’entreprise B.`
        }
      },
      // description: {
      //   en: 'Not the same vision of the human scale up there.',
      //   fr: 'Pas la même vision de l’échelle humaine de là haut.'
      // }
    }

    return (
      <div className="news__20161214--content news__content main__content">
        <div 
          className="news__20161214--pic1"
          style={{ backgroundImage: `url(${pic}) `}}
          title="chantier de la maison privée">
        </div>
        <div className="news__20161214--column3--container column3--container active">
          <div className="news__20161214--column3">
            <div className="news__20161214--date">{content.date[this.props.language]()}</div>
            <div className="news__20161214--date--datesubtitle" dangerouslySetInnerHTML={content.dateSubtitle[this.props.language]}></div>
            {/*<div className="news__20161214--date--description">{content.description[this.props.language]}</div>*/}
          </div>
        </div>
      </div>
      )
  }
}

News20161214.propTypes = {
  // language: React.PropTypes.string.isRequired,
}


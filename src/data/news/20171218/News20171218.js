import React from 'react';
import './News20171218.css';
import pic1 from './reunion_bretagne.jpg';
import pic2 from './speleo_hotel.jpg';

export default class News20171218 extends React.Component {

  render() {

    const content = {
      date: {
        en() { 
          const date = new Date(2017, 11, 18)
          return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        },
        fr() { 
          const date = new Date(2017, 11, 18)
          return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
        }
      },
      dateSubtitle: {
        en: {
          __html: `Study meeting and speleology VS with the APM for the project of the hotel in Locmariaquer.`
        },
        fr: {
          __html: `Réunion d’étude et spéléologie VS avec l’AMO pour le projet de l’hôtel à Locmariaquer.`
        }
      },
      // description: {
      //   en: 'Not the same vision of the human scale up there.',
      //   fr: 'Pas la même vision de l’échelle humaine de là haut.'
      // }
    }

    return (
      <div className="news__20171218--content news__content main__content">
        <div className="news__20171218--pic1">
          <img src={pic1} alt="port de bretagne"/>
        </div>
        <div className="news__20171218--pic2">
          <img src={pic2} alt="cave sous un hotel"/>
        </div>
        <div className="news__20171218--column3--container column3--container">
          <div className="news__20171218--column3">
            <div className="news__20171218--date">{content.date[this.props.language]()}</div>
            <div className="news__20171218--date--datesubtitle" dangerouslySetInnerHTML={content.dateSubtitle[this.props.language]}></div>
            {/*<div className="news__20171218--date--description">{content.description[this.props.language]}</div>*/}
          </div>
        </div>
      </div>
      )
  }
}

News20171218.propTypes = {
  // language: React.PropTypes.string.isRequired,
}


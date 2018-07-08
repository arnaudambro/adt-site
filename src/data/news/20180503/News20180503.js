import React from 'react';
// import './News20180503.css';
import pic from './adt-rehabilitation-restaurant-oberkampf.jpg';

export default class News20180503 extends React.Component {
  render() {
    const content = {
      date: {
        en() {
          const date = new Date(2018, 4, 3);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        fr() {
          const date = new Date(2018, 4, 3);
          return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        }
      },
      dateSubtitle: {
        en: {
          __html: `NEW PROJECT !!!`
        },
        fr: {
          __html: `NOUVEAU PROJET !!!`
        }
      },
      description: {
        en: 'Rehabilitation of a restaurant in Oberkampf, Paris, France.',
        fr: 'Réhabilitation d’un restaurant à Oberkampf, Paris, France.'
      }
    };

    return (
      <div className="news__20180503--content news__content main__content">
        {/*<div className="news__20180503--title column1" />*/}
        <div
          className="news__20180503--pic1"
          style={{ backgroundImage: `url(${pic}) ` }}
          title="chantier de la maison privée"
        />
        <div className="news__20180503--column3--container column3--container active">
          <div className="news__20180503--column3">
            <div className="news__20180503--date">
              {content.date[this.props.language]()}
            </div>
            <div
              className="news__20180503--date--datesubtitle"
              dangerouslySetInnerHTML={
                content.dateSubtitle[this.props.language]
              }
            />
            <div className="news__20180503--date--description">
              {content.description[this.props.language]}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

News20180503.propTypes = {
  // language: React.PropTypes.string.isRequired,
};

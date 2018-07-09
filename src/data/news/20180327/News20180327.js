import React from 'react';
// import './News20180327.css';
import pic from './adt-rehabilitation-bureaux-orleans.jpg';

export default class News20180327 extends React.Component {
  render() {
    const content = {
      date: {
        en() {
          const date = new Date(2018, 2, 27);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        fr() {
          const date = new Date(2018, 2, 27);
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
        en: 'Rehabilitation of offices in Orléans, France.',
        fr:
          "Réhabilitation d'un immeuble de bureaux dans le centre d'Orléans, France."
      }
    };

    return (
      <div className="news__20180327--content news__content main__content">
        <div className="news__20180327--title column1" />
        <div
          className="news__20180327--pic1"
          style={{ backgroundImage: `url(${pic}) ` }}
          title="Nouveau chantier - réhabilitation siège EALIS"
        />
        <div className="news__20180327--column3--container column3--container active">
          <div className="news__20180327--column3">
            <div className="news__20180327--date">
              {content.date[this.props.language]()}
            </div>
            <div
              className="news__20180327--date--datesubtitle"
              dangerouslySetInnerHTML={
                content.dateSubtitle[this.props.language]
              }
            />
            <div className="news__20180327--date--description">
              {content.description[this.props.language]}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

News20180327.propTypes = {
  // language: React.PropTypes.string.isRequired,
};

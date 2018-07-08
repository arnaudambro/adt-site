import React from 'react';
// import './News20180220.css';
import pic from './adt-birmanie.jpg';

export default class News20180220 extends React.Component {
  render() {
    const content = {
      date: {
        en() {
          const date = new Date(2018, 1, 20);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        fr() {
          const date = new Date(2018, 1, 20);
          return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        }
      },
      dateSubtitle: {
        en: {
          __html: `ADT flies off to Birmanie`
        },
        fr: {
          __html: `ADT s'envoie en l'air en Birmanie`
        }
      }
      // description: {
      //   en: 'Not the same vision of the human scale up there.',
      //   fr: 'Pas la même vision de l’échelle humaine de là haut.'
      // }
    };

    return (
      <div className="news__20180220--content news__content main__content">
        <div className="news__20180220--title column1" />
        <div
          className="news__20180220--pic1"
          style={{ backgroundImage: `url(${pic}) ` }}
          title="chantier de la maison privée"
        />
        <div className="news__20180220--column3--container column3--container active">
          <div className="news__20180220--column3">
            <div className="news__20180220--date">
              {content.date[this.props.language]()}
            </div>
            <div
              className="news__20180220--date--datesubtitle"
              dangerouslySetInnerHTML={
                content.dateSubtitle[this.props.language]
              }
            />
            {/*<div className="news__20180220--date--description">{content.description[this.props.language]}</div>*/}
          </div>
        </div>
      </div>
    );
  }
}

News20180220.propTypes = {
  // language: React.PropTypes.string.isRequired,
};

import React from 'react';
// import './News20180202.css';
import pic from './atelier-delalande-tabourin-news-etude-hd11-matiere.jpg';

export default class News20180202 extends React.Component {
  render() {
    const content = {
      date: {
        en() {
          const date = new Date(2018, 1, 2);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        fr() {
          const date = new Date(2018, 1, 2);
          return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        }
      },
      dateSubtitle: {
        en: {
          __html: `Reflection on the materiality of the hotel HD11`
        },
        fr: {
          __html: `Réflexion sur la matérialité de l’hôtel HD11`
        }
      }
      // description: {
      //   en: 'Not the same vision of the human scale up there.',
      //   fr: 'Pas la même vision de l’échelle humaine de là haut.'
      // }
    };

    return (
      <div className="news__20180202--content news__content main__content">
        <div
          className="news__20180202--pic1"
          style={{ backgroundImage: `url(${pic}) ` }}
          title="Réflexion sur la matérialité de l'hôtel HD11"
        />
        <div className="news__20180202--column3--container column3--container active">
          <div className="news__20180202--column3">
            <div className="news__20180202--date">
              {content.date[this.props.language]()}
            </div>
            <div
              className="news__20180202--date--datesubtitle"
              dangerouslySetInnerHTML={
                content.dateSubtitle[this.props.language]
              }
            />
            {/*<div className="news__20180202--date--description">{content.description[this.props.language]}</div>*/}
          </div>
        </div>
      </div>
    );
  }
}

News20180202.propTypes = {
  // language: React.PropTypes.string.isRequired,
};

import React from 'react';
// import './News20170410.css';
import pic from './atelier-delalande-tabourin-news-maquette-etude-hd11.jpg';

export default class News20170410 extends React.Component {
  render() {
    const content = {
      date: {
        en() {
          const date = new Date(2017, 3, 10);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        fr() {
          const date = new Date(2017, 3, 10);
          return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        }
      },
      dateSubtitle: {
        en: {
          __html: `Model of study of a hotel in Brittany.`
        },
        fr: {
          __html: `Maquette d’étude d’un hôtel en Bretagne.`
        }
      }
      // description: {
      //   en: 'Not the same vision of the human scale up there.',
      //   fr: 'Pas la même vision de l’échelle humaine de là haut.'
      // }
    };

    return (
      <div className="news__20170410--content news__content main__content">
        <div
          className="news__20170410--pic1"
          style={{ backgroundImage: `url(${pic}) ` }}
          title="Maquette d’étude d’un hôtel en Bretagne."
        />
        <div className="news__20170410--column3--container column3--container active">
          <div className="news__20170410--column3">
            <div className="news__20170410--date">
              {content.date[this.props.language]()}
            </div>
            <div
              className="news__20170410--date--datesubtitle"
              dangerouslySetInnerHTML={
                content.dateSubtitle[this.props.language]
              }
            />
            {/*<div className="news__20170410--date--description">{content.description[this.props.language]}</div>*/}
          </div>
        </div>
      </div>
    );
  }
}

News20170410.propTypes = {
  // language: React.PropTypes.string.isRequired,
};

import React from 'react';
// import './News20160106.css';
import pic from './atelier-delalande-tabourin-news-presse-armor.png';

export default class News20160106 extends React.Component {
  render() {
    const content = {
      date: {
        en() {
          const date = new Date(2016, 0, 6);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        fr() {
          const date = new Date(2016, 0, 6);
          return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        }
      },
      dateSubtitle: {
        en: {
          __html: `La Presse d'Armor is talking about us.`
        },
        fr: {
          __html: `Ca parle de nous dans la Presse d’Armor.`
        }
      }
      // description: {
      //   en: 'Not the same vision of the human scale up there.',
      //   fr: 'Pas la même vision de l’échelle humaine de là haut.'
      // }
    };

    return (
      <div className="news__20160106--content news__content main__content">
        <div
          className="news__20160106--pic1"
          style={{ backgroundImage: `url(${pic}) ` }}
          title="Presse d’Armor."
        />
        <div className="news__20160106--column3--container column3--container active">
          <div className="news__20160106--column3">
            <div className="news__20160106--date">
              {content.date[this.props.language]()}
            </div>
            <div
              className="news__20160106--date--datesubtitle"
              dangerouslySetInnerHTML={
                content.dateSubtitle[this.props.language]
              }
            />
            {/*<div className="news__20160106--date--description">{content.description[this.props.language]}</div>*/}
          </div>
        </div>
      </div>
    );
  }
}

News20160106.propTypes = {
  // language: React.PropTypes.string.isRequired,
};

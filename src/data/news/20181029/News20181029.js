import React from 'react';
// import './News20181029.css';
import pic1 from './atelier-delalande-tabourin-siege-orleans-1.JPG';
import pic2 from './atelier-delalande-tabourin-siege-orleans-2.JPG';

export default class News20181029 extends React.Component {
  render() {
    const content = {
      date: {
        en() {
          const date = new Date(2018, 9, 29);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        fr() {
          const date = new Date(2018, 9, 29);
          return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        }
      },
      dateSubtitle: {
        en: {
          __html: `TODO`
        },
        fr: {
          __html: 'Nouvelles photos du chantier du siège d’Orléans'
        }
      }
      // description: {
      //   en: 'Not the same vision of the human scale up there.',
      //   fr: 'Pas la même vision de l’échelle humaine de là haut.'
      // }
    };

    return (
      <div className="news__20181029--content news__content main__content">
        <div
          className="news__20181029--pic1"
          style={{ backgroundImage: `url(${pic1}) ` }}
          title="siège d'orléans"
        />
        <div
          className="news__20181029--pic2"
          style={{ backgroundImage: `url(${pic2}) ` }}
          title="siège d'orléans"
        />
        <div className="news__20181029--column3--container column3--container active">
          <div className="news__20181029--column3">
            <div className="news__20181029--date">
              {content.date[this.props.language]()}
            </div>
            <div
              className="news__20181029--date--datesubtitle"
              dangerouslySetInnerHTML={
                content.dateSubtitle[this.props.language]
              }
            />
            {/*<div className="news__20181029--date--description">{content.description[this.props.language]}</div>*/}
          </div>
        </div>
      </div>
    );
  }
}

News20181029.propTypes = {
  // language: React.PropTypes.string.isRequired,
};

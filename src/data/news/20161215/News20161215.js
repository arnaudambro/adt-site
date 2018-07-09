import React from 'react';
// import './News20161215.css';
import pic from './atelier-delalande-tabourin-news-tuilerie-vb229.jpg';

export default class News20161215 extends React.Component {
  render() {
    const content = {
      date: {
        en() {
          const date = new Date(2016, 11, 15);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        fr() {
          const date = new Date(2016, 11, 15);
          return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        }
      },
      dateSubtitle: {
        en: {
          __html: `Visit of the last artisanal brick factory in France for the renovation of Barn B.`
        },
        fr: {
          __html: `Visite de la dernière briqueterie artisanale de France pour la réhabilitation de la Grange B.`
        }
      }
      // description: {
      //   en: 'Not the same vision of the human scale up there.',
      //   fr: 'Pas la même vision de l’échelle humaine de là haut.'
      // }
    };

    return (
      <div className="news__20161215--content news__content main__content">
        <div
          className="news__20161215--pic1"
          style={{ backgroundImage: `url(${pic}) ` }}
          title="Dernière briqueterie artisanale de France"
        />
        <div className="news__20161215--column3--container column3--container active">
          <div className="news__20161215--column3">
            <div className="news__20161215--date">
              {content.date[this.props.language]()}
            </div>
            <div
              className="news__20161215--date--datesubtitle"
              dangerouslySetInnerHTML={
                content.dateSubtitle[this.props.language]
              }
            />
            {/*<div className="news__20161215--date--description">{content.description[this.props.language]}</div>*/}
          </div>
        </div>
      </div>
    );
  }
}

News20161215.propTypes = {
  // language: React.PropTypes.string.isRequired,
};

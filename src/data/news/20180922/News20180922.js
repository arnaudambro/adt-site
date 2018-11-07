import React from 'react';
// import './News20180922.css';
import pic1 from './atelier-delalande-tabourin-picardie-facade.jpg';
import pic2 from './atelier-delalande-tabourin-picardie-escalier.jpeg';

export default class News20180922 extends React.Component {
  render() {
    const content = {
      date: {
        en() {
          const date = new Date(2018, 8, 22);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        fr() {
          const date = new Date(2018, 8, 22);
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
          __html: `NOUVEAU PROJET !!<br /><br />Réhabilitation d’une résidence secondaire<br />
          Picardie, France.`
        }
      }
      // description: {
      //   en: 'Not the same vision of the human scale up there.',
      //   fr: 'Pas la même vision de l’échelle humaine de là haut.'
      // }
    };

    return (
      <div className="news__20180922--content news__content main__content">
        <div
          className="news__20180922--pic1"
          style={{ backgroundImage: `url(${pic1}) ` }}
          title="Façade"
        />
        <div
          className="news__20180922--pic2"
          style={{ backgroundImage: `url(${pic2}) ` }}
          title="Escalier"
        />
        <div className="news__20180922--column3--container column3--container active">
          <div className="news__20180922--column3">
            <div className="news__20180922--date">
              {content.date[this.props.language]()}
            </div>
            <div
              className="news__20180922--date--datesubtitle"
              dangerouslySetInnerHTML={
                content.dateSubtitle[this.props.language]
              }
            />
            {/*<div className="news__20180922--date--description">{content.description[this.props.language]}</div>*/}
          </div>
        </div>
      </div>
    );
  }
}

News20180922.propTypes = {
  // language: React.PropTypes.string.isRequired,
};

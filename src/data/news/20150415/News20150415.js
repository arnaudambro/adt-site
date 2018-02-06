import React from 'react';
// import './News20150415.css';
import pic from './atelierdelalandetabourinnewsprixmeilleurdiplome.png';

export default class News20150415 extends React.Component {
  render() {
    const content = {
      date: {
        en() {
          const date = new Date(2015, 3, 15);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        fr() {
          const date = new Date(2015, 3, 15);
          return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        }
      },
      dateSubtitle: {
        en: {
          __html: `Mention of the best diploma of the Ecole spéciale d’Architecture`
        },
        fr: {
          __html: `Mention du meilleur diplôme de l’Ecole spéciale d’Architecture`
        }
      }
      // description: {
      //   en: 'Not the same vision of the human scale up there.',
      //   fr: 'Pas la même vision de l’échelle humaine de là haut.'
      // }
    };

    return (
      <div className="news__20150415--content news__content main__content">
        <div
          className="news__20150415--pic1"
          style={{ backgroundImage: `url(${pic}) ` }}
          title="chantier de la maison privée"
        />
        <div className="news__20150415--column3--container column3--container active">
          <div className="news__20150415--column3">
            <div className="news__20150415--date">
              {content.date[this.props.language]()}
            </div>
            <div
              className="news__20150415--date--datesubtitle"
              dangerouslySetInnerHTML={
                content.dateSubtitle[this.props.language]
              }
            />
            {/*<div className="news__20150415--date--description">{content.description[this.props.language]}</div>*/}
          </div>
        </div>
      </div>
    );
  }
}

News20150415.propTypes = {
  // language: React.PropTypes.string.isRequired,
};

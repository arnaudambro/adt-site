import React from 'react';
// import './News20160517.css';
import pic from './atelierdelalandetabourinnewsprixdelacademie.png';

export default class News20160517 extends React.Component {
  render() {
    const content = {
      date: {
        en() {
          const date = new Date(2016, 4, 17);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        fr() {
          const date = new Date(2016, 4, 17);
          return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        }
      },
      dateSubtitle: {
        en: {
          __html: `Winner of the GRAND PRIX D'ARCHITECTURE at the Académie des Beaux-Arts.<br />Congratulations to our friend and colleague Boris Lefèvre for his first prize.`
        },
        fr: {
          __html: `Lauréat finaliste du GRAND PRIX D’ARCHITECTURE de l’Académie des Beaux-Arts.<br />Félicitations à notre ami et confrère Boris Lefèvre pour son premier prix.`
        }
      }
      // description: {
      //   en: 'Not the same vision of the human scale up there.',
      //   fr: 'Pas la même vision de l’échelle humaine de là haut.'
      // }
    };

    return (
      <div className="news__20160517--content news__content main__content">
        <div
          className="news__20160517--pic1"
          style={{ backgroundImage: `url(${pic}) ` }}
          title="chantier de la maison privée"
        />
        <div className="news__20160517--column3--container column3--container active">
          <div className="news__20160517--column3">
            <div className="news__20160517--date">
              {content.date[this.props.language]()}
            </div>
            <div
              className="news__20160517--date--datesubtitle"
              dangerouslySetInnerHTML={
                content.dateSubtitle[this.props.language]
              }
            />
            {/*<div className="news__20160517--date--description">{content.description[this.props.language]}</div>*/}
          </div>
        </div>
      </div>
    );
  }
}

News20160517.propTypes = {
  // language: React.PropTypes.string.isRequired,
};

import React from 'react';
// import './News20180101.css';
import bonne_annee_2018 from './bonne_annee_2018.jpg';

export default class News20180101 extends React.Component {
  render() {
    const content = {
      title: {
        en: 'Best wishes for this New Year!',
        fr: 'Meilleurs voeux pour cette nouvelle anneé!'
      },
      newsSubtitle: {
        en: 'Greetings of happiness and success from the whole team.',
        fr:
          'Pleins de voeux de bonheur et de réussite de la part de toute l’équipe.'
      },
      date: {
        en() {
          const date = new Date(2017, 11, 31);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        fr() {
          const date = new Date(2017, 11, 31);
          return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        }
      }
      // dateSubtitle: {
      //   en: {
      //     __html: `Winter walk<br />Valgrisenche, Italie`
      //   },
      //   fr: {
      //     __html: `Promenade hivernale<br />Valgrisenche, Italie`
      //   }
      // },
      // description: {
      //   en: 'Not the same vision of the human scale up there.',
      //   fr: 'Pas la même vision de l’échelle humaine de là haut.'
      // }
    };

    return (
      <div className="news__20180101--content news__content main__content">
        <div className="news__20180101--title column1">
          {content.title[this.props.language]}
        </div>
        <div className="news__20180101--subtitle column1">
          {content.newsSubtitle[this.props.language]}
        </div>
        <div
          className="news__20180101--pic1"
          style={{ backgroundImage: `url(${bonne_annee_2018}) ` }}
          title="bonne annee 2018"
        />
        <div className="news__20180101--column3--container column3--container active">
          <div className="news__20180101--column3">
            <div className="news__20180101--date">
              {content.date[this.props.language]()}
            </div>
            <div className="news__20180101--title column3">
              {content.title[this.props.language]}
            </div>
            <div className="news__20180101--subtitle column3">
              {content.newsSubtitle[this.props.language]}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

News20180101.propTypes = {
  // language: React.PropTypes.string.isRequired,
};

import React from 'react';
// import './News20170827.css';
import pic from './2018_LIBAN.JPG';

export default class News20170827 extends React.Component {
  render() {
    const content = {
      date: {
        en() {
          const date = new Date(2017, 7, 27);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        fr() {
          const date = new Date(2017, 7, 27);
          return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        }
      },
      dateSubtitle: {
        en: {
          __html: `Morning light on a palace in Beirut`
        },
        fr: {
          __html: `Lumière matinale sur un palais à Beyrouth`
        }
      }
      // description: {
      //   en: 'Not the same vision of the human scale up there.',
      //   fr: 'Pas la même vision de l’échelle humaine de là haut.'
      // }
    };

    return (
      <div className="news__20170827--content news__content main__content">
        <div
          className="news__20170827--pic1"
          style={{ backgroundImage: `url(${pic}) ` }}
          title="chantier de la maison privée"
        />
        <div className="news__20170827--column3--container column3--container active">
          <div className="news__20170827--column3">
            <div className="news__20170827--date">
              {content.date[this.props.language]()}
            </div>
            <div
              className="news__20170827--date--datesubtitle"
              dangerouslySetInnerHTML={
                content.dateSubtitle[this.props.language]
              }
            />
            {/*<div className="news__20170827--date--description">{content.description[this.props.language]}</div>*/}
          </div>
        </div>
      </div>
    );
  }
}

News20170827.propTypes = {
  // language: React.PropTypes.string.isRequired,
};

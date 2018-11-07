import React from 'react';
// import './News20181105.css';
import pic1 from './adt-fossiles.jpeg';

export default class News20181105 extends React.Component {
  render() {
    const content = {
      date: {
        en() {
          const date = new Date(2018, 10, 5);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        fr() {
          const date = new Date(2018, 10, 5);
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
          __html: `Fossiles bloqués dans le temps.`
        }
      }
      // description: {
      //   en: 'Not the same vision of the human scale up there.',
      //   fr: 'Pas la même vision de l’échelle humaine de là haut.'
      // }
    };

    return (
      <div className="news__20181105--content news__content main__content">
        <div
          className="news__20181105--pic1"
          style={{ backgroundImage: `url(${pic1}) ` }}
          title="Fossiles bloqués dans le temps."
        />
        <div className="news__20181105--column3--container column3--container active">
          <div className="news__20181105--column3">
            <div className="news__20181105--date">
              {content.date[this.props.language]()}
            </div>
            <div
              className="news__20181105--date--datesubtitle"
              dangerouslySetInnerHTML={
                content.dateSubtitle[this.props.language]
              }
            />
            {/*<div className="news__20181105--date--description">{content.description[this.props.language]}</div>*/}
          </div>
        </div>
      </div>
    );
  }
}

News20181105.propTypes = {
  // language: React.PropTypes.string.isRequired,
};

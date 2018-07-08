import React from 'react';
// import './News20180209.css';
import pic from './adt-singapour.jpg';

export default class News20180209 extends React.Component {
  render() {
    const content = {
      date: {
        en() {
          const date = new Date(2018, 1, 9);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        fr() {
          const date = new Date(2018, 1, 9);
          return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        }
      },
      dateSubtitle: {
        en: {
          __html: `ADT in Singapur`
        },
        fr: {
          __html: `ADT à Singapour`
        }
      }
      // description: {
      //   en: 'Not the same vision of the human scale up there.',
      //   fr: 'Pas la même vision de l’échelle humaine de là haut.'
      // }
    };

    return (
      <div className="news__20180209--content news__content main__content">
        <div
          className="news__20180209--pic1"
          style={{ backgroundImage: `url(${pic}) ` }}
          title="chantier de la maison privée"
        />
        <div className="news__20180209--column3--container column3--container active">
          <div className="news__20180209--column3">
            <div className="news__20180209--date">
              {content.date[this.props.language]()}
            </div>
            <div
              className="news__20180209--date--datesubtitle"
              dangerouslySetInnerHTML={
                content.dateSubtitle[this.props.language]
              }
            />
            {/*<div className="news__20180209--date--description">{content.description[this.props.language]}</div>*/}
          </div>
        </div>
      </div>
    );
  }
}

News20180209.propTypes = {
  // language: React.PropTypes.string.isRequired,
};

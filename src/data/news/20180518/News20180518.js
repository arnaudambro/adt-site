import React from 'react';
// import './News20180518.css';
import pic1 from './extension-maison-orleans-1.jpg';
import pic2 from './extension-maison-orleans-2.jpg';

export default class News20180518 extends React.Component {
  render() {
    const content = {
      date: {
        en() {
          const date = new Date(2018, 4, 18);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        fr() {
          const date = new Date(2018, 4, 18);
          return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        }
      },
      dateSubtitle: {
        en: {
          __html: `NEW PROJECT !!!`
        },
        fr: {
          __html: `NOUVEAU PROJET !!!`
        }
      },
      description: {
        en: 'Extension of a private house. Orléans, Paris, France.',
        fr: 'Extension d’une maison privée à Orléans, Paris, France.'
      }
    };

    return (
      <div className="news__20180518--content news__content main__content">
        <div className="news__20180518--title column1" />
        <div
          className="news__20180518--pic1"
          style={{ backgroundImage: `url(${pic1}) ` }}
          title="Extension maison orléans"
        />
        <div
          className="news__20180518--pic2"
          style={{ backgroundImage: `url(${pic2}) ` }}
          title="Extension maison orléans"
        />
        <div className="news__20180518--column3--container column3--container active">
          <div className="news__20180518--column3">
            <div className="news__20180518--date">
              {content.date[this.props.language]()}
            </div>
            <div
              className="news__20180518--date--datesubtitle"
              dangerouslySetInnerHTML={
                content.dateSubtitle[this.props.language]
              }
            />
            <div className="news__20180518--date--description">
              {content.description[this.props.language]}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

News20180518.propTypes = {
  // language: React.PropTypes.string.isRequired,
};

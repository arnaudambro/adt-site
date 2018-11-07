import React from 'react';
// import './News20181018.css';
import pic1 from './adt-avancement-rp24.JPG';

export default class News20181018 extends React.Component {
  render() {
    const content = {
      date: {
        en() {
          const date = new Date(2018, 9, 18);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        fr() {
          const date = new Date(2018, 9, 18);
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
          __html: `Avancement du chantier du restaurant RP24.<br />
          Paris, France.`
        }
      }
      // description: {
      //   en: 'Not the same vision of the human scale up there.',
      //   fr: 'Pas la même vision de l’échelle humaine de là haut.'
      // }
    };

    return (
      <div className="news__20181018--content news__content main__content">
        <div
          className="news__20181018--pic1"
          style={{ backgroundImage: `url(${pic1}) ` }}
          title="port de bretagne"
        />
        <div className="news__20181018--column3--container column3--container active">
          <div className="news__20181018--column3">
            <div className="news__20181018--date">
              {content.date[this.props.language]()}
            </div>
            <div
              className="news__20181018--date--datesubtitle"
              dangerouslySetInnerHTML={
                content.dateSubtitle[this.props.language]
              }
            />
            {/*<div className="news__20181018--date--description">{content.description[this.props.language]}</div>*/}
          </div>
        </div>
      </div>
    );
  }
}

News20181018.propTypes = {
  // language: React.PropTypes.string.isRequired,
};

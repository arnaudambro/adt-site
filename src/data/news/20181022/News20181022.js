import React from 'react';
// import './News20181022.css';
import pic1 from './adt-everest.JPG';

export default class News20181022 extends React.Component {
  render() {
    const content = {
      date: {
        en() {
          const date = new Date(2018, 9, 22);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        fr() {
          const date = new Date(2018, 9, 22);
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
          __html: `ADT au pied de l'Everest`
        }
      }
      // description: {
      //   en: 'Not the same vision of the human scale up there.',
      //   fr: 'Pas la même vision de l’échelle humaine de là haut.'
      // }
    };

    return (
      <div className="news__20181022--content news__content main__content">
        <div
          className="news__20181022--pic1"
          style={{ backgroundImage: `url(${pic1}) ` }}
          title="port de bretagne"
        />
        <div className="news__20181022--column3--container column3--container active">
          <div className="news__20181022--column3">
            <div className="news__20181022--date">
              {content.date[this.props.language]()}
            </div>
            <div
              className="news__20181022--date--datesubtitle"
              dangerouslySetInnerHTML={
                content.dateSubtitle[this.props.language]
              }
            />
            {/*<div className="news__20181022--date--description">{content.description[this.props.language]}</div>*/}
          </div>
        </div>
      </div>
    );
  }
}

News20181022.propTypes = {
  // language: React.PropTypes.string.isRequired,
};

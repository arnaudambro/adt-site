import React from 'react';
// import './News20171101.css';
import pic from './2017_irlande.jpg';

export default class News20171101 extends React.Component {
  render() {
    const content = {
      date: {
        en() {
          const date = new Date(2011, 10, 1);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        fr() {
          const date = new Date(2011, 10, 1);
          return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        }
      },
      dateSubtitle: {
        en: {
          __html: `Irish excursion in Connemara`
        },
        fr: {
          __html: `Excursion irlandaise dans le Connemara`
        }
      }
      // description: {
      //   en: 'Not the same vision of the human scale up there.',
      //   fr: 'Pas la même vision de l’échelle humaine de là haut.'
      // }
    };

    return (
      <div className="news__20171101--content news__content main__content">
        <div
          className="news__20171101--pic1"
          style={{ backgroundImage: `url(${pic}) ` }}
          title="ADT en Irlande"
        />
        <div className="news__20171101--column3--container column3--container active">
          <div className="news__20171101--column3">
            <div className="news__20171101--date">
              {content.date[this.props.language]()}
            </div>
            <div
              className="news__20171101--date--datesubtitle"
              dangerouslySetInnerHTML={
                content.dateSubtitle[this.props.language]
              }
            />
            {/*<div className="news__20171101--date--description">{content.description[this.props.language]}</div>*/}
          </div>
        </div>
      </div>
    );
  }
}

News20171101.propTypes = {
  // language: React.PropTypes.string.isRequired,
};

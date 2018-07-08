import React from 'react';
// import './News20180325.css';
import pic1 from './adt-breze-fondations.jpg';
import pic2 from './adt-breze-terrassement.jpg';

export default class News20180325 extends React.Component {
  render() {
    const content = {
      date: {
        en() {
          const date = new Date(2018, 2, 25);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        fr() {
          const date = new Date(2018, 2, 25);
          return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        }
      },
      dateSubtitle: {
        en: {
          __html: `Site PM19 ongoing.<br />Brézé, France.`
        },
        fr: {
          __html: `Avancement du projet PM19.<br />Brézé, France.`
        }
      }
      // description: {
      //   en: 'Not the same vision of the human scale up there.',
      //   fr: 'Pas la même vision de l’échelle humaine de là haut.'
      // }
    };

    return (
      <div className="news__20180325--content news__content main__content">
        <div
          className="news__20180325--pic1"
          style={{ backgroundImage: `url(${pic1}) ` }}
          title="port de bretagne"
        />
        <div
          className="news__20180325--pic2"
          style={{ backgroundImage: `url(${pic2}) ` }}
          title="cave sous un hotel"
        />
        <div className="news__20180325--column3--container column3--container active">
          <div className="news__20180325--column3">
            <div className="news__20180325--date">
              {content.date[this.props.language]()}
            </div>
            <div
              className="news__20180325--date--datesubtitle"
              dangerouslySetInnerHTML={
                content.dateSubtitle[this.props.language]
              }
            />
            {/*<div className="news__20180325--date--description">{content.description[this.props.language]}</div>*/}
          </div>
        </div>
      </div>
    );
  }
}

News20180325.propTypes = {
  // language: React.PropTypes.string.isRequired,
};

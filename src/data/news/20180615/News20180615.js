import React from 'react';
// import './News20180615.css';
import pic1 from './adt-ealis-1.jpg';
import pic2 from './adt-ealis-2.jpg';

export default class News20180615 extends React.Component {
  render() {
    const content = {
      date: {
        en() {
          const date = new Date(2018, 5, 15);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        fr() {
          const date = new Date(2018, 5, 15);
          return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        }
      },
      dateSubtitle: {
        en: {
          __html: `Site progress of EALIS head-office.<br />Orléans, France.`
        },
        fr: {
          __html: `Avancement du chantier du siège de l’entreprise EALIS.<br />Orléans, France.`
        }
      }
      // description: {
      //   en: 'Not the same vision of the human scale up there.',
      //   fr: 'Pas la même vision de l’échelle humaine de là haut.'
      // }
    };

    return (
      <div className="news__20180615--content news__content main__content">
        <div
          className="news__20180615--pic1"
          style={{ backgroundImage: `url(${pic1}) ` }}
          title="port de bretagne"
        />
        <div
          className="news__20180615--pic2"
          style={{ backgroundImage: `url(${pic2}) ` }}
          title="cave sous un hotel"
        />
        <div className="news__20180615--column3--container column3--container active">
          <div className="news__20180615--column3">
            <div className="news__20180615--date">
              {content.date[this.props.language]()}
            </div>
            <div
              className="news__20180615--date--datesubtitle"
              dangerouslySetInnerHTML={
                content.dateSubtitle[this.props.language]
              }
            />
            {/*<div className="news__20180615--date--description">{content.description[this.props.language]}</div>*/}
          </div>
        </div>
      </div>
    );
  }
}

News20180615.propTypes = {
  // language: React.PropTypes.string.isRequired,
};

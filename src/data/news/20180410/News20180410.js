import React from 'react';
// import './News20180410.css';
import pic from './adt-avancement-vh16-orleans.jpg';

export default class News20180410 extends React.Component {
  render() {
    const content = {
      date: {
        en() {
          const date = new Date(2018, 4, 10);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        fr() {
          const date = new Date(2018, 4, 10);
          return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        }
      },
      dateSubtitle: {
        en: {
          __html: `Site of the private house VH16.<br />Orléans, France.`
        },
        fr: {
          __html: `Avancement du chantier de la maison privée VH16.<br />Orléans, France.`
        }
      }
      // description: {
      //   en: 'Rehabilitation of offices in Orléans, France.',
      //   fr: "Réhabilitation d'un immeuble de bureaux dans le centre d'Orléans, France."
      // }
    };

    return (
      <div className="news__20180410--content news__content main__content">
        <div className="news__20180410--title column1" />
        <div
          className="news__20180410--pic1"
          style={{ backgroundImage: `url(${pic}) ` }}
          title="chantier de la maison privée"
        />
        <div className="news__20180410--column3--container column3--container active">
          <div className="news__20180410--column3">
            <div className="news__20180410--date">
              {content.date[this.props.language]()}
            </div>
            <div
              className="news__20180410--date--datesubtitle"
              dangerouslySetInnerHTML={
                content.dateSubtitle[this.props.language]
              }
            />
            {/*<div className="news__20180410--date--description">{content.description[this.props.language]}</div>*/}
          </div>
        </div>
      </div>
    );
  }
}

News20180410.propTypes = {
  // language: React.PropTypes.string.isRequired,
};

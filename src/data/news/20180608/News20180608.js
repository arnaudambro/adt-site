import React from 'react';
// import './News20180608.css';
import pic from './adt-soiree-1-ans.jpg';

export default class News20180608 extends React.Component {
  render() {
    const content = {
      date: {
        en() {
          const date = new Date(2018, 5, 8);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        fr() {
          const date = new Date(2018, 5, 8);
          return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        }
      },
      dateSubtitle: {
        en: {
          __html: `FIRST YEAR ANNIVERSARY !!!`
        },
        fr: {
          __html: `SOIRÉE DES 1 ANS !!!`
        }
      },
      description: {
        en: {
          __html:
            'And presentation of the first album of our dear musician friends RIVIEREMONK.<br />Agence ADT, Paris, France.'
        },
        fr: {
          __html:
            'Et présentation du premier album de nos chers amis musiciens RIVIEREMONK.<br />Agence ADT, Paris, France.'
        }
      }
    };

    return (
      <div className="news__20180608--content news__content main__content">
        {/*<div className="news__20180608--title column1" />*/}
        <div
          className="news__20180608--pic1"
          style={{ backgroundImage: `url(${pic}) ` }}
          title="chantier de la maison privée"
        />
        <div className="news__20180608--column3--container column3--container active">
          <div className="news__20180608--column3">
            <div className="news__20180608--date">
              {content.date[this.props.language]()}
            </div>
            <div
              className="news__20180608--date--datesubtitle"
              dangerouslySetInnerHTML={
                content.dateSubtitle[this.props.language]
              }
            />
            <div
              className="news__20180608--date--description"
              dangerouslySetInnerHTML={content.description[this.props.language]}
            />
          </div>
        </div>
      </div>
    );
  }
}

News20180608.propTypes = {
  // language: React.PropTypes.string.isRequired,
};

import React from 'react';
// import './News20180314.css';
import pic from './adt-maison-orleans.jpg';

export default class News20180314 extends React.Component {
  render() {
    const content = {
      date: {
        en() {
          const date = new Date(2018, 2, 14);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        fr() {
          const date = new Date(2018, 2, 14);
          return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        }
      },
      dateSubtitle: {
        en: {
          __html: `NEW PROJECT !!`
        },
        fr: {
          __html: `NOUVEAU PROJET !!`
        }
      },
      description: {
        en: 'Extension and rehabilitation of a house towards Orléans, France.',
        fr: 'Extension et réhabilitation d’une maison vers Orléans, France.'
      }
    };

    return (
      <div className="news__20180314--content news__content main__content">
        <div
          className="news__20180314--pic1"
          style={{ backgroundImage: `url(${pic}) ` }}
          title="Extension d'une maison vers Orléans"
        />
        <div className="news__20180314--column3--container column3--container active">
          <div className="news__20180314--column3">
            <div className="news__20180314--date">
              {content.date[this.props.language]()}
            </div>
            <div
              className="news__20180314--date--datesubtitle"
              dangerouslySetInnerHTML={
                content.dateSubtitle[this.props.language]
              }
            />
            <div className="news__20180314--date--description">
              {content.description[this.props.language]}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

News20180314.propTypes = {
  // language: React.PropTypes.string.isRequired,
};

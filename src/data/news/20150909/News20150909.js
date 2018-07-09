import React from 'react';
// import './News20150909.css';
import pic from './atelier-delalande-tabourin-news-courrier-archi.png';

export default class News20150909 extends React.Component {
  render() {
    const content = {
      date: {
        en() {
          const date = new Date(2015, 8, 9);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        fr() {
          const date = new Date(2015, 8, 9);
          return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        }
      },
      dateSubtitle: {
        en: {
          __html: `Article in Le Courrier de l’Architecte`
        },
        fr: {
          __html: `Article dans Le Courrier de l’Architecte`
        }
      }
      // description: {
      //   en: 'Not the same vision of the human scale up there.',
      //   fr: 'Pas la même vision de l’échelle humaine de là haut.'
      // }
    };

    return (
      <div className="news__20150909--content news__content main__content">
        <div
          className="news__20150909--pic1"
          style={{ backgroundImage: `url(${pic}) ` }}
          title="Article dans Le Courrier de l’Architecte"
        />
        <div className="news__20150909--column3--container column3--container active">
          <div className="news__20150909--column3">
            <div className="news__20150909--date">
              {content.date[this.props.language]()}
            </div>
            <div
              className="news__20150909--date--datesubtitle"
              dangerouslySetInnerHTML={
                content.dateSubtitle[this.props.language]
              }
            />
            {/*<div className="news__20150909--date--description">{content.description[this.props.language]}</div>*/}
          </div>
        </div>
      </div>
    );
  }
}

News20150909.propTypes = {
  // language: React.PropTypes.string.isRequired,
};

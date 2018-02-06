import React from 'react';
// import './News20180105.css';
import PARCHAMP from './PARCHAMP.jpg';

export default class News20180105 extends React.Component {
  //constructor(props) {
  // super(props);
  // state = {};
  // }

  render() {
    const content = {
      title: {
        en: 'First Collaboration',
        fr: 'Premère Collaboration'
      },
      newsDescription: {
        en:
          'We are pleased to welcome Mathilde Lizoret to the agency. She will start by being responsible for assembling the school building permit file.',
        fr:
          'L’atelier a été contacté par l’agence ALC afin de collaborer sur la mise en place d’un dossier de permis de construire pour la réhabilitation et l’extension d’un groupe scolaire dans la région parisienne.'
      },
      date: {
        en() {
          const date = new Date(2018, 0, 5);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        fr() {
          const date = new Date(2018, 0, 5);
          return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        }
      },
      dateSubtitle: {
        en: '',
        fr: ''
      }
    };

    return (
      <div className="news__20180105--content news__content main__content">
        <div
          className="news__20180105--column1"
          style={{ backgroundImage: `url(${PARCHAMP}) ` }}
        />
        <div className="news__20180105--column2">
          <div className="news__20180105--title column1">
            {content.title[this.props.language]}
          </div>
          <div className="news__20180105--description column1">
            {content.newsDescription[this.props.language]}
          </div>
        </div>
        <div className="news__20180105--column3--container column3--container active">
          <div className="news__20180105--column3">
            <div className="news__20180105--date">
              {content.date[this.props.language]()}
            </div>
            <div className="news__20180105--date--datesubtitle" />
            <div className="news__20180105--date--description" />
            <div className="news__20180105--title column3">
              {content.title[this.props.language]}
            </div>
            <div className="news__20180105--description column3">
              {content.newsDescription[this.props.language]}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

News20180105.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
};

/*------------------------------------*\
    
\*------------------------------------*/

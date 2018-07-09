import React from 'react';
// import './News20180115.css';
import mathilde from './mathilde.jpg';

export default class News20180115 extends React.Component {
  //constructor(props) {
  // super(props);
  // state = {};
  // }

  render() {
    const content = {
      title: {
        en: 'new comer !',
        fr: 'nouvelle arrivante !'
      },
      newsSubtitle: {
        en: 'New project manager',
        fr: 'Nouvelle chargée de projet'
      },
      newsDescription: {
        en:
          'We are pleased to welcome Mathilde Lizoret to the agency. She will start by being responsible for assembling the school building permit file.',
        fr:
          'Nous avons le plaisir d’accueillir Mathilde Lizoret au sein de l’agence. Elle sera notamment responsable du montage du dossier de permis de construire du complexe scolaire.'
      },
      // blague: {
      //   en: 'What a joke !',
      //   fr: 'Bonne petite blague...'
      // },
      date: {
        en() {
          const date = new Date(2018, 0, 15);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        fr() {
          const date = new Date(2018, 0, 15);
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
      <div className="news__20180115--content news__content main__content">
        <div className="news__20180115--column1">
          <div className="news__20180115--title">
            {content.title[this.props.language]}
          </div>
          <div className="news__20180115--subtitle column1">
            {content.newsSubtitle[this.props.language]}
          </div>
          <div className="news__20180115--description column1">
            {content.newsDescription[this.props.language]}
          </div>
          {/*<div className="news__20180115--blague column1">{content.blague[this.props.language]}</div>*/}
        </div>
        <div
          className="news__20180115--column2"
          style={{ backgroundImage: `url(${mathilde}) ` }}
          title="Mathilde"
        />
        <div className="news__20180115--column3--container column3--container active">
          <div className="news__20180115--column3">
            <div className="news__20180115--date">
              {content.date[this.props.language]()}
            </div>
            <div className="news__20180115--date--datesubtitle" />
            <div className="news__20180115--date--description" />
            <div className="news__20180115--subtitle column3">
              {content.newsSubtitle[this.props.language]}
            </div>
            <div className="news__20180115--description column3">
              {content.newsDescription[this.props.language]}
            </div>
            {/*<div className="news__20180115--blague column3">
              {content.blague[this.props.language]}
            </div>*/}
          </div>
        </div>
      </div>
    );
  }
}

News20180115.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
};

/*------------------------------------*\
    
\*------------------------------------*/

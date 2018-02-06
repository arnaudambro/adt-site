import React from 'react';
// import './News20160111.css';
import pic from './atelierdelalandetabourinnewstrophebeton.png';

export default class News20160111 extends React.Component {
  render() {
    const content = {
      date: {
        en() {
          const date = new Date(2016, 0, 11);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        fr() {
          const date = new Date(2016, 0, 11);
          return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        }
      },
      dateSubtitle: {
        en: {
          __html: `2nd prize at the 2016 Concrete Trophy.`
        },
        fr: {
          __html: `2ème prix du Trophée Béton 2016.`
        }
      },
      description: {
        en:
          'This competition is organized by the Betocib and CIMbeton associations and the French School of Concrete Foundation. They reward young graduates (less than a year) of French architecture schools for the relevance of their graduation project.',
        fr:
          'Ce concours est organisé par les associations Betocib et CIMbéton et la fondation d’entreprise Ecole française du béton. Ils récompensent de jeunes diplômés (depuis moins d’un an) des écoles d’architecture françaises pour leur projet de fin d’études.'
      }
    };

    return (
      <div className="news__20160111--content news__content main__content">
        <div
          className="news__20160111--pic1"
          style={{ backgroundImage: `url(${pic}) ` }}
          title="chantier de la maison privée"
        />
        <div className="news__20160111--column3--container column3--container active">
          <div className="news__20160111--column3">
            <div className="news__20160111--date">
              {content.date[this.props.language]()}
            </div>
            <div
              className="news__20160111--date--datesubtitle"
              dangerouslySetInnerHTML={
                content.dateSubtitle[this.props.language]
              }
            />
            <div className="news__20160111--date--description">
              {content.description[this.props.language]}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

News20160111.propTypes = {
  // language: React.PropTypes.string.isRequired,
};

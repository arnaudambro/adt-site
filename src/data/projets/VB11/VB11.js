import React from 'react';
// import data_projets from '../../data_projets';

// import './VB11.css';

import contexte from './img/atelierdelalandetabourin-maison-loiret-VB11-contexte.jpg';
import diagramme from './img/atelierdelalandetabourin-maison-loiret-VB11-diagramme.jpg';
import planRDC from './img/atelierdelalandetabourin-maison-loiret-VB11-planRDC.jpg';
import photo from './img/atelierdelalandetabourin-maison-loiret-VB11-photo.jpg';
import coupe from './img/atelierdelalandetabourin-maison-loiret-VB11-coupe.jpg';
import facade from './img/atelierdelalandetabourin-maison-loiret-VB11-facade.jpg';

export default class VB11 extends React.Component {
  render() {
    // const lang = this.props.language;
    // const pageName = this.props.name;

    /*    const content = {
      title: `${data_projets[`${pageName}`].name}.`,
      surface: {
        en: {
          __html: `Floor area: ${data_projets[`${pageName}`].surface} m<sup>2<sup>`,
        },
        fr: {
          __html: `Surface: ${data_projets[`${pageName}`].surface} m<sup>2<sup>`,
        }
      },
      cost: {
        en: {
          __html: 'Cost: NC',
        },
        fr: {
          __html: 'Coût: NC',
        }
      }
    }
*/

    return (
      <div className="projet projet__VB11 main__content projet__content">
        {/*<div className="projet__title">{content.title}</div>*/}
        {/*<div className="projet__subtitle projet__subtitle--surface" dangerouslySetInnerHTML={content.surface[lang]}></div>
        <div className="projet__subtitle projet__subtitle--cost" dangerouslySetInnerHTML={content.cost[lang]}></div>*/}
        <div className="projet__image--fullWidth">
          <img src={contexte} alt="contexte" />
        </div>
        <div className="projet__divider projet__divider--thick" />
        <p>
          Située face à la promenade pédestre des bords de Loire, la Villa VB11
          se démarque du contexte paysagé par son architecture prononcée et
          avant-gardiste des années 70. La demande d’une extension des espaces
          de vie prend donc la forme d’une avancée vers le fleuve. Apparait
          alors une géométrie simple et en rupture avec les lignes du bâtiment
          existant. Sa façade est composée d’un béton sablée qui miroite au
          promeneur la proximité du sablonneux paysage de l’affluent.
        </p>
        <p>
          A l’intérieur, un décalage des niveaux de sol permet de séparer les
          différents espaces de séjour et d’ouvrir plus généreusement le volume
          crée sur les différentes vues qu’offres le paysage. Un patio minéral
          aux allures de dunes vient amener une ambiance supplémentaire au lieu.
        </p>
        <div className="projet__divider projet__divider--thin" />
        <div className="projet__image--fullWidth marginbottom">
          <img src={diagramme} alt="diagramme" />
        </div>
        <div
          className="projet__image--fullWidth"
          style={{ marginBottom: `140px` }}
        >
          <img src={planRDC} alt="plan RDC" />
        </div>
        <div
          className="projet__image--fullWidth"
          style={{ marginBottom: `140px` }}
        >
          <img src={photo} alt="photographie" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={coupe} alt="coupe" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={facade} alt="coupe sud" />
        </div>
      </div>
    );
  }
}

VB11.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
};

import React from 'react';
// import data_projets from '../../data_projets';

// import './AM03.css';

import elevationinterieure1 from './img/atelierdelalandetabourin-appartement-paris-AM03-elevationinterieure1.jpg';
import elevationinterieure2 from './img/atelierdelalandetabourin-appartement-paris-AM03-elevationinterieure2.jpg';
import plan from './img/atelierdelalandetabourin-appartement-paris-AM03-plan.jpg';

export default class AM03 extends React.Component {
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
      <div className="projet projet__AM03 main__content projet__content">
        <div className="projet__divider projet__divider--thick" />
        <p>
          Située face à la promenade pédestre des bords de Loire, la Villa AM03
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
        <div className="projet__image--fullWidth">
          <img src={plan} alt="plan-RDC" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={elevationinterieure1} alt="elevation interieure" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={elevationinterieure2} alt="elevation interieure" />
        </div>
      </div>
    );
  }
}

AM03.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
};

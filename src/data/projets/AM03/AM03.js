import React from 'react';
// import data_projets from '../../data_projets';

// import './AM03.css';

// import elevationinterieure1 from './img/atelierdelalandetabourin-appartement-paris-AM03-elevationinterieure1.jpg';
// import elevationinterieure2 from './img/atelierdelalandetabourin-appartement-paris-AM03-elevationinterieure2.jpg';
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
          Niché au cinquième étage d’un immeuble haussmannien l’appartement AM03
          est parfaitement représentatif du style de vie de l’époque ; une
          séparation marquée entre les espaces de vie et les espaces servants.
          La réhabilitation vient donc bouleverser le plan en l’adaptant aux
          usages d’aujourd’hui.
        </p>
        <p>
          C’est le béton qui vient marquer cette réorganisation de l’espace. Son
          aspect lisse et doux vient s’opposer aux détails des moulures et
          aspérité des pièces existantes. Le passage d’un espace réhabilité à un
          autre se fait au travers d’encadrements de portes en bouleau. Au sol,
          la transition est marquée par l’évolution du parquet en béton teinté
          ocre. Une association bouleau/ béton ocre vient donc homogénéiser
          l’ensemble des espaces de l’appartement.
        </p>
        <div className="projet__divider projet__divider--thin" />
        <div className="projet__image--fullWidth">
          <img src={plan} alt="plan-RDC" />
        </div>
        {/*         <div
          className="projet__image--fullWidth"
          style={{
            width: '50%'
          }}
        >
          <img src={elevationinterieure2} alt="elevation interieure" />
        </div> */}
      </div>
    );
  }
}

AM03.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
};

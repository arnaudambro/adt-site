import React from 'react';
// import data_projets from '../../data_projets';

// import './BE69.css';

import elevationinterieure1 from './img/atelierdelalandetabourin-restaurant-paris-RP24-elevationinterieure1.jpg';
import elevationinterieure2 from './img/atelierdelalandetabourin-restaurant-paris-RP24-elevationinterieure2.jpg';
import facade from './img/atelierdelalandetabourin-restaurant-paris-RP24-facade.jpg';
import facade2 from './img/atelierdelalandetabourin-restaurant-paris-RP24-facade2.jpg';
import plan from './img/atelierdelalandetabourin-restaurant-paris-RP24-plan.jpg';

export default class BE69 extends React.Component {
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
    }*/

    return (
      <div className="projet projet__BE69 main__content projet__content">
        {/*<div className="projet__title">{content.title}</div>*/}
        {/*<div className="projet__subtitle projet__subtitle--surface" dangerouslySetInnerHTML={content.surface[lang]}></div>
        <div className="projet__subtitle projet__subtitle--cost" dangerouslySetInnerHTML={content.cost[lang]}></div>*/}
        {/* <div className="projet__image--fullWidth">
          <img src={concept} alt="concept" />
        </div> */}
        <div className="projet__divider projet__divider--thick" />
        <p>
          Situé en plein cœur d’Orléans, l’immeuble classé du 69 boulevard
          Alexandre Martin accueille désormais le siège du groupe EALIS. Nous
          sommes donc partis de l’identité graphique de cette entreprise afin de
          pouvoir imaginer et concevoir le projet de réhabilitation de leurs
          futurs bureaux.
        </p>
        <p>
          Depuis son entrée par la grande porte cochère jusque dans chacun des
          niveaux de bureau, le salarié et le client sont guidés par une
          circulation aux multiples reflets noirs. Un jeu ponctuel de panneaux
          de bois et de claustras métalliques qui vient dynamiser les
          interventions sur le bâtiment existant et ainsi donner ainsi une âme
          plus industrielle et chaleureuse au lieu.
        </p>
        <p>
          Un espace cafétéria et repos est aménagé au fond du jardin paysagé.
        </p>
        <p />
        <div className="projet__divider projet__divider--thin" />
        {/* <div className="projet__image--fullWidth marginbottom">
          <img src={diagramme} alt="diagramme" />
        </div> */}
        <div className="projet__image--fullWidth">
          <img src={plan} alt="plan" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={elevationinterieure1} alt="elevation interieure" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={elevationinterieure2} alt="elevation interieure" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={facade} alt="facade" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={facade2} alt="facade" />
        </div>
      </div>
    );
  }
}

BE69.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
};

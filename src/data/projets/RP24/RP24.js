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
        {/* <div className="projet__image--fullWidth contexte">
          <img src={concept} alt="concept" />
        </div> */}
        <div className="projet__divider projet__divider--thick" />
        <p style={{ fontStyle: 'italic', marginBottom: 30 }}>
          Réalisé en collaboration avec Maud Saget Architecte.
        </p>
        <p>
          En angle de rue dans le quartier d’Oberkampf « le coin POP » propose
          un espace partagé entre restauration et co-working. Le geste
          architecturale est d’accentuer le coin de l’immeuble avec un matériau
          possédant un tout autre discours. Avec aussi la volonté de prolonger
          la façade existante tout en y amenant un mélange dynamique et pop.
        </p>
        <p>
          L’utilisation des carreaux de verre permet au coin, très exposé durant
          la journée, de se retrouve animer par un jeu de lumière et de reflets.
          A l’intérieur le brut de la façade de pierre se confronte à une longue
          façade voutée et épurée. Derrière celle-ci se cachent des alcôves
          propices au travail et à l’isolement. La possibilité d’ouvrir une
          grande partie des baies vitrées permet aux utilisateurs d’oublier la
          limite entre la rue et le restaurant.
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

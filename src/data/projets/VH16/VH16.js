import React from 'react';
import data_projets from '../../data_projets';

import './VH16.css';

import patiointerieur from './img/atelierdelalandetabourin-villa-patio-interieur-VH16.jpg';
import plan from './img/atelierdelalandetabourin-villa-patio-VH16-plan.jpg';
import elevation1 from './img/atelierdelalandetabourin-villa-patio-VH16-elevation1.jpg';
import coupe2 from './img/atelierdelalandetabourin-villa-patio-VH16-coupe2.jpg';
import coupe3 from './img/atelierdelalandetabourin-villa-patio-VH16-coupe3.jpg';
import piscine from './img/atelierdelalandetabourin-villa-patio-VH16-piscine.jpg';
import salon from './img/atelierdelalandetabourin-villa-patio-VH16-salon.jpg';


export default class VH16 extends React.Component {


  render() {

  

    const lang = this.props.language;
    const pageName = this.props.name;

    const content = {
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


    return(

      <div className="projet projet__VH16 main__content projet__content">
        <div className="projet__title">{content.title}</div>
        <div className="projet__subtitle projet__subtitle--surface" dangerouslySetInnerHTML={content.surface[lang]}></div>
        <div className="projet__subtitle projet__subtitle--cost" dangerouslySetInnerHTML={content.cost[lang]}></div>
        <div className="projet__image--fullWidth">
          <img src={patiointerieur} alt='patio interieur' />
        </div>
        <div className="projet__divider projet__divider--thick"></div>
        <p>D’origine syrienne, le client nous a dès le début de l’esquisse montré son envie de retrouver dans son projet VH16 une approche contemporaine de son architecture natale.</p>
        <p>La maison est donc constituée d’un volume sobre de plein-pied. Avec une organisation basée sur un plan carré évidé en son centre par un patio végétalisé. Ce principe permet à l’habitation de concentrer ses espaces de vie autour d’un jardin central calme et isolé. Toute en y optimisant l’apport de lumière.</p>
        <p>Ainsi une fois toutes les baies vitrées du patio intérieur ouvertes. tous les différents espaces de la maison se transforment en un seul espace libre au milieu de la végétation.</p>
        <p>A l’extérieur, l’usage d’un enduit balayé ton pierre vient donner un côté naturel à la façade. Mais il permet aussi à l’agence de revaloriser l’image d’un matériau stérile et ennuyeux.</p>
        <div className="projet__divider projet__divider--thin"></div>
        <div className="projet__image--fullWidth">
          <img src={plan} alt='plan' />
        </div>
        <div className="projet__image--fullWidth">
          <img src={elevation1} alt='elevation1' />
        </div>
        <div className="projet__image--fullWidth">
          <img src={coupe2} alt='coupe2' />
        </div>
        <div className="projet__image--fullWidth">
          <img src={coupe3} alt='coupe3' />
        </div>
        <div className="projet__image--fullWidth">
          <img src={piscine} alt='piscine' />
        </div>
        <div className="projet__image--fullWidth">
          <img src={salon} alt='salon' />
        </div>
      </div>


      )
  }
}

VH16.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
}

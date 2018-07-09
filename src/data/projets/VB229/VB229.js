import React from 'react';
// import data_projets from '../../data_projets';

// import './VB229.css';

import tuilerieargile from './img/atelier-delalande-tabourin-villa-campagne-tuilerie-argile-VB229.jpg';
import tuileriebriques from './img/atelier-delalande-tabourin-villa-campagne-tuilerie-briques-VB229.jpg';
import plan from './img/atelier-delalande-tabourin-villa-campagne-tuile-plan.jpg';
import elevation1 from './img/atelier-delalande-tabourin-villa-campagne-tuile-elevation1.jpg';
import elevation2 from './img/atelier-delalande-tabourin-villa-campagne-tuile-elevation2.jpg';
import elevation3 from './img/atelier-delalande-tabourin-villa-campagne-tuile-elevation3.jpg';
import elevation4 from './img/atelier-delalande-tabourin-villa-campagne-tuile-elevation4.jpg';
import existant from './img/atelier-delalande-tabourin-villa-existant-VB229.jpg';
import facade from './img/atelier-delalande-tabourin-villa-campagne-briques-facade-VB229.jpg';
import salon from './img/atelier-delalande-tabourin-villa-campagne-briques-salon-VB229.jpg';
import diagramme from './img/atelier-delalande-tabourin-villa-campagne-briques-diagram-VB229.jpg';

export default class VB229 extends React.Component {
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
      <div className="projet projet__VB229 main__content projet__content">
        {/*<div className="projet__title">{content.title}</div>*/}
        {/*<div className="projet__subtitle projet__subtitle--surface" dangerouslySetInnerHTML={content.surface[lang]}></div>
        <div className="projet__subtitle projet__subtitle--cost" dangerouslySetInnerHTML={content.cost[lang]}></div>*/}
        <div className="projet__image--fullWidth">
          <img src={tuilerieargile} alt="tuilerie argile" />
        </div>
        <div className="projet__divider projet__divider--thick" />
        <p>
          Le projet consiste ici à surélever et réhabiliter trois corps de ferme
          mitoyens au sein d’une propriété en Sologne.
        </p>
        <p>
          Présent sur les bâtiments existants, comme dans toute la région,
          l’usage de la brique est devenu une évidence, d’autant que la dernière
          briqueterie artisanale de France se trouve à 15km du site.
        </p>
        <p>
          Un jeu traditionnel de briques viendra donc établir en façade un
          dialogue contemporain entre l’existant et le projet. Une composition
          avec deux rythmes d’enchevêtrement de blocs d’argile différenciera
          subtilement la surélévation du reste des bâtiments. Comme un hommage à
          une architecture passée.
        </p>
        <p>
          A l’intérieur, de nombreux puits de lumière viendront illuminer
          l‘espace et révéler la délicate association de la brique, du bois et
          du béton ciré.
        </p>
        <div className="projet__divider projet__divider--thin" />
        <div className="projet__image--fullWidth marginbottom">
          <img src={diagramme} alt="diagramme" />
        </div>
        <div
          className="projet__image--fullWidth"
          style={{ marginBottom: `140px` }}
        >
          <img src={tuileriebriques} alt="tuilerie briques" />
        </div>
        <div className="projet__image--fullWidth marginbottom">
          <img src={plan} alt="plan" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={elevation1} alt="elevation1" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={elevation2} alt="elevation2" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={elevation3} alt="elevation3" />
        </div>
        <div className="projet__image--fullWidth marginbottom">
          <img src={elevation4} alt="elevation4" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={existant} alt="existant" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={facade} alt="facade" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={salon} alt="salon" />
        </div>
      </div>
    );
  }
}

VB229.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
};

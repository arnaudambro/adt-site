import React from 'react';
// import data_projets from '../../data_projets';

// import './PM19.css';

import matiere from './img/atelier-delalande-tabourin-paysage-piscine-PM19-matiere.jpg';
import plan from './img/atelier-delalande-tabourin-paysage-piscine-PM19-plan.jpg';
import coupesud from './img/atelier-delalande-tabourin-paysage-piscine-PM19-coupesud.jpg';
import coupeest from './img/atelier-delalande-tabourin-paysage-piscine-PM19-coupeest.jpg';
import coupenord from './img/atelier-delalande-tabourin-paysage-piscine-PM19-coupenord.jpg';
import perspective1 from './img/atelier-delalande-tabourin-paysage-piscine-PM19-perspective1.jpg';
import perspective2 from './img/atelier-delalande-tabourin-paysage-piscine-PM19-perspective2.jpg';
import diagramme from './img/atelier-delalande-tabourin-paysage-piscine-PM19-diagramme.jpg';

export default class PM19 extends React.Component {
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
      <div className="projet projet__PM19 main__content projet__content">
        {/*<div className="projet__title">{content.title}</div>*/}
        {/*<div className="projet__subtitle projet__subtitle--surface" dangerouslySetInnerHTML={content.surface[lang]}></div>
        <div className="projet__subtitle projet__subtitle--cost" dangerouslySetInnerHTML={content.cost[lang]}></div>*/}
        <div className="projet__image--fullWidth contexte">
          <img src={matiere} alt="matiere" />
        </div>
        <div className="projet__divider projet__divider--thick" />
        <p>
          Située près du château de Brézé, la parcelle accueille une maison
          articulée autour de plusieurs cours et d’un vaste jardin filant à deux
          mètres au-dessus du niveau la maison. Le projet vient s’y insérer et
          créer une pente légère liant maison et jardin. La pierre calcaire,
          présente dans la région et habillant les façades alentour devient
          l’élément principal.
        </p>
        <p>
          Seuls trois matériaux sont utilisés : la pierre de tuffeau, le béton
          brut et l’eau.
        </p>
        <p>
          Murs de pierre et mobilier béton viennent créer les espaces extérieurs
          autour du plan d’eau. On glisse derrière un mur pour se changer,
          derrière un autre pour plonger. Ce jeu de stèles cadre les vues d’un
          paysage à l’autre. On s’y promène comme dans une ruine.
        </p>
        <div className="projet__divider projet__divider--thin" />
        <div className="projet__image--fullWidth marginbottom">
          <img src={diagramme} alt="diagramme" />
        </div>
        <div
          className="projet__image--fullWidth"
          style={{ marginBottom: `140px` }}
        >
          <img src={plan} alt="plan" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={coupesud} alt="coupe sud" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={coupeest} alt="coupe est" />
        </div>
        <div className="projet__image--fullWidth marginbottom">
          <img src={coupenord} alt="coupe nord" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={perspective1} alt="perspective 1" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={perspective2} alt="perspective 2" />
        </div>
      </div>
    );
  }
}

PM19.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
};

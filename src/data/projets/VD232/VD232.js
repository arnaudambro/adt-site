import React from 'react';
// import data_projets from '../../data_projets';

// import './VD232.css';

import contexte from './img/atelierdelalandetabourin-maison-loiret-VD232-contexte.jpg';
import diagramme from './img/atelierdelalandetabourin-maison-loiret-VD232-diagramme.jpg';
import facadenord from './img/atelierdelalandetabourin-maison-loiret-VD232-facadenord.jpg';
import facadeouest from './img/atelierdelalandetabourin-maison-loiret-VD232-facadeouest.jpg';
import facadesud from './img/atelierdelalandetabourin-maison-loiret-VD232-facadesud.jpg';
import pers from './img/atelierdelalandetabourin-maison-loiret-VD232-pers.jpg';
import planRDC from './img/atelierdelalandetabourin-maison-loiret-VD232-PLANRDC.jpg';
import planR1 from './img/atelierdelalandetabourin-maison-loiret-VD232-PLANR1.jpg';

export default class VD232 extends React.Component {
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
      <div className="projet projet__VD232 main__content projet__content">
        {/*<div className="projet__title">{content.title}</div>*/}
        {/*<div className="projet__subtitle projet__subtitle--surface" dangerouslySetInnerHTML={content.surface[lang]}></div>
        <div className="projet__subtitle projet__subtitle--cost" dangerouslySetInnerHTML={content.cost[lang]}></div>*/}
        <div className="projet__image--fullWidth contexte">
          <img src={contexte} alt="contexte" />
        </div>
        <div className="projet__divider projet__divider--thick" />
        <p>
          Ce projet a été conçu et imaginé dans la continuité de celui de la
          villa Beulin (VB11) car il est seulement sur l’autre rive de la Loire,
          à 2km plus au sud. Il y reprend donc le même principe d’une extension
          où l’architecture vient apaiser la géométrie de l’existant.
        </p>
        <p>
          Concernant la matérialité, VD232 se veut comme le négatif de VB11.
          C’est-à-dire qu’à la place d’avoir en façade un béton beige avec un
          granulat blanc nous avons un béton blanc avec un granulat beige. La
          Loire n’étant pas visible depuis le site, il y a donc encore plus ici
          la volonté de rappeler sa matérialité. L’intégralité de la maison a
          été réhabilitée autour d’un patio central et d’une toiture terrasse
          minérale. Des espaces paysagers aux allures de dunes amènent une
          ambiance supplémentaire au lieu.
        </p>
        <p>
          Sur la façade principale, un biais vient dynamiser les volumes et
          devient comme une invitation à entrer.
        </p>
        <div className="projet__divider projet__divider--thin" />
        <div className="projet__image--fullWidth marginbottom">
          <img src={diagramme} alt="diagramme" />
        </div>
        <div
          className="projet__image--fullWidth"
          style={{ marginLeft: `-12px` }}
        >
          <img src={planRDC} alt="plan-RDC" />
        </div>
        <div
          className="projet__image--fullWidth"
          style={{ marginBottom: `140px` }}
        >
          <img src={planR1} alt="plan R+1" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={facadenord} alt="facade nord" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={facadeouest} alt="facade ouest" />
        </div>
        <div
          className="projet__image--fullWidth"
          style={{ marginBottom: `110px` }}
        >
          <img src={facadesud} alt="facade sud" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={pers} alt="perspective" />
        </div>
      </div>
    );
  }
}

VD232.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
};

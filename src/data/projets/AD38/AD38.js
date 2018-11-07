import React from 'react';
// import data_projets from '../../data_projets';

// import './AD38.css';

// import chambre from './img/atelier-delalande-tabourin-appartements-AD38-chambre.jpg';
import matiere from './img/atelier-delalande-tabourin-appartements-AD38-matiere.jpg';
import plan from './img/atelier-delalande-tabourin-appartements-AD38-plan.jpg';
import couloir from './img/atelier-delalande-tabourin-appartements-AD38-couloir.jpg';
import placardferme from './img/atelier-delalande-tabourin-appartements-AD38-placardferme.jpg';
import placardouvert from './img/atelier-delalande-tabourin-appartements-AD38-placardouvert.jpg';
import banc from './img/atelier-delalande-tabourin-appartements-AD38-banc.jpg';
import detail from './img/atelier-delalande-tabourin-appartements-AD38-detail.jpg';
import pierre from './img/atelier-delalande-tabourin-appartements-AD38-pierre.jpg';
import salon from './img/atelier-delalande-tabourin-appartements-AD38-salon.jpg';
import couloirchambre from './img/atelier-delalande-tabourin-appartements-AD38-couloirchambre.jpg';
import couloir2 from './img/atelier-delalande-tabourin-appartements-AD38-couloir2.jpg';
import sdb from './img/atelier-delalande-tabourin-appartements-AD38-sdb.jpg';
import diagramme from './img/atelier-delalande-tabourin-appartements-AD38-diagramme.jpg';

export default class AD38 extends React.Component {
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
      <div className="projet projet__AD38 main__content projet__content">
        {/*<div className="projet__title">{content.title}</div>*/}
        {/*<div className="projet__subtitle projet__subtitle--surface" dangerouslySetInnerHTML={content.surface[lang]}></div>
        <div className="projet__subtitle projet__subtitle--cost" dangerouslySetInnerHTML={content.cost[lang]}></div>*/}
        <div className="projet__image--fullWidth contexte">
          <img src={matiere} alt="eglise et matière" />
        </div>
        <div className="projet__divider projet__divider--thick" />
        <p>
          L’appartement est situé dans un immeuble qui surplombe Paris depuis la
          colline de Meudon. Les façades en pierre de l’immeuble et de l’église
          contiguë ont fait naître en nous la volonté de réutiliser ce matériau
          noble au sein du projet.
        </p>
        <p>
          Il fallait ensuite repenser l’appartement en fonction de la trame
          structurelle et des réseaux existants. S’est ensuive l’étude d’une
          nouvelle organisation de l’espace qui viendrait s’articuler autour
          d’un bloc fonctionnel centralisé, habillé de pierre. Composé de
          rangements et de pièces d’eau, il nous révèle une multitude de petits
          espaces aux couleurs et aux univers variés.
        </p>
        <p>
          Un monolithe de pierre autour duquel la vie de l’appartement va
          prendre corps.<br />Il devient une zone tampon entre un espace jour
          (séjour, cuisine) et un espace nuit (chambres).
        </p>
        <div className="projet__divider projet__divider--thin" />
        <div className="projet__image--fullWidth marginbottom">
          <img src={diagramme} alt="diagramme" />
        </div>
        <div className="projet__image--fullWidth marginbottom">
          <img src={plan} alt="plan" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={couloir} alt="couloir" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={placardferme} alt="placard ferme" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={placardouvert} alt="placard ouvert" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={banc} alt="banc" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={detail} alt="detail - prise électrique" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={pierre} alt="pierre" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={salon} alt="salon" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={couloirchambre} alt="couloir chambre" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={couloir2} alt="couloir2" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={sdb} alt="salle de bain" />
        </div>
      </div>
    );
  }
}

AD38.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
};

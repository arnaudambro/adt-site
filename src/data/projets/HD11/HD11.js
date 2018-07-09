import React from 'react';
// import data_projets from '../../data_projets';
import salon from './img/atelier-delalande-tabourin-hotel-morbihan-pierre-HD11-salon.jpg';
import ref from './img/atelier-delalande-tabourin-hotel-morbihan-pierre-HD11-ref.jpg';
import plan from './img/atelier-delalande-tabourin-hotel-morbihan-pierre-HD11-plan.jpg';
import coupe3 from './img/atelier-delalande-tabourin-hotel-morbihan-pierre-HD11-coupe3.jpg';
import coupe2 from './img/atelier-delalande-tabourin-hotel-morbihan-pierre-HD11-coupe2.jpg';
import coupe1 from './img/atelier-delalande-tabourin-hotel-morbihan-pierre-HD11-coupe1.jpg';
import piscine from './img/atelier-delalande-tabourin-hotel-morbihan-pierre-HD11-piscine.jpg';
import bronzo from './img/atelier-delalande-tabourin-hotel-morbihan-pierre-HD11-bronzo.jpg';
import auray from './img/atelier-delalande-tabourin-hotel-morbihan-pierre-HD11-auray.jpg';
import diagramme from './img/atelier-delalande-tabourin-hotel-morbihan-pierre-HD11-diagramme.jpg';

// import './HD11.css';
export default class HD11 extends React.Component {
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
      <div className="projet projet__HD11 main__content projet__content">
        {/*<div className="projet__title">{content.title}</div>*/}
        {/*<div className="projet__subtitle projet__subtitle--surface" dangerouslySetInnerHTML={content.surface[lang]}></div>
        <div className="projet__subtitle projet__subtitle--cost" dangerouslySetInnerHTML={content.cost[lang]}></div>*/}
        <div className="projet__image--fullWidth">
          <img src={ref} alt="dolmens et menhirs" />
        </div>
        <div className="projet__divider projet__divider--thick" />
        <p>
          HD11 s’inscrit à l’entrée de la ville de Locmariaquer. Forte de son
          port et de ses sites mégalithiques. C’est autour de ce patrimoine
          architectural que l’agence a souhaité développer ce projet. A l’image
          du grand menhir brisé d’Er Grah, l’extension de l’hôtel s’impose au
          sein de la parcelle dans une radicale dynamique de chute.
        </p>
        <p>
          Le monolithe éclaté le long du mur mitoyen est essentiellement composé
          de chambres aux ambiances lumineuses et minérales. Une stratégie qui
          permet de libérer de très généreuses pièces de vie au rez de chaussée
          et un vaste jardin paysagé ou les bassins et ruissellement d’eau
          rappellent la proximité de la mer.
        </p>
        <p>
          Un geste architectural qui permet à l’hôtel de passer de 600 à 900m2
          de surface plancher, et ainsi de passer en catégorie 4*. Le projet se
          veut donc comme signal d’accueil d’un patrimoine local pour les
          visiteurs.
        </p>
        <div className="projet__divider projet__divider--thin" />
        <div className="projet__image--fullWidth marginbottom">
          <img src={diagramme} alt="diagramme" />
        </div>
        <div className="projet__image--fullWidth marginbottom">
          <img src={plan} alt="plan" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={coupe1} alt="coupe1" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={coupe2} alt="coupe2" />
        </div>
        <div
          className="projet__image--fullWidth"
          style={{ marginBottom: `115px` }}
        >
          <img src={coupe3} alt="coupe3" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={auray} alt="auray" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={bronzo} alt="bronzo" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={salon} alt="salon" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={piscine} alt="piscine" />
        </div>
      </div>
    );
  }
}

HD11.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
};

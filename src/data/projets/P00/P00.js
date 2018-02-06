import React from 'react';
// import data_projets from '../../data_projets';

// import './P00.css';

import planmasse from './img/atelierdelalandetabourin-diplome-beton-planmasse.jpg';
import matiere from './img/atelierdelalandetabourin-diplome-beton-matiere.jpg';
import banc from './img/atelierdelalandetabourin-diplome-beton-banc.jpg';
import plan from './img/atelierdelalandetabourin-diplome-beton-plan.jpg';
import coupes from './img/atelierdelalandetabourin-diplome-beton-coupes.jpg';
import coupematiere from './img/atelierdelalandetabourin-diplome-beton-coupematiere.jpg';
import breche from './img/atelierdelalandetabourin-diplome-beton-breche.jpg';
import horizon from './img/atelierdelalandetabourin-diplome-beton-horizon.jpg';

export default class P00 extends React.Component {
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
      <div className="projet projet__P00 main__content projet__content">
        {/*<div className="projet__title">{content.title}</div>*/}
        {/*<div className="projet__subtitle projet__subtitle--surface" dangerouslySetInnerHTML={content.surface[lang]}></div>
        <div className="projet__subtitle projet__subtitle--cost" dangerouslySetInnerHTML={content.cost[lang]}></div>*/}
        <div className="projet__image--fullWidth">
          <img src={planmasse} alt="plan masse" />
        </div>
        <div className="projet__divider projet__divider--thick" />
        <p>
          Avec une urbanisation industrielle et touristique du milieu maritime
          en pleine expansion, nous avons voulu raconter comment l’Architecture,
          l’Homme et la Mer, pourraient se retrouver au travers d’une expérience
          nouvelle.
        </p>
        <p>
          Situé à 4 kilomètres des côtes bretonnes, sur une île à l’extrémité du
          Sillon de Talbert, le projet se défini comme partie intégrante de son
          milieu. Il vivra et évoluera à l’image du paysage maritime qui
          l’accueille, au rythme des marées.
        </p>
        <p>
          Il est une masse qui vient entourer l’île d’Olonne sans la toucher,
          encadrer le site en valorisant la beauté et la force de cet îlot vert
          au milieu d’un désert de sable ou d’eau. Cette masse est le symbole,
          la matérialisation à marée basse, de la future masse d’eau qui viendra
          entourer le rocher à marée haute. Aligné en hauteur au dernier
          horizon, le projet devient comme le négatif d’un paysage maritime
          temporairement disparu, comme une prise de conscience matérielle d’un
          phénomène invisible.
        </p>
        <p>
          Ce projet est un travail sur le temps, l’espace, sa matière et ses
          températures. L’eau monte sur le site de 15 centimètres (une marche )
          en 9 minutes. Ce constat est donc devenu la base notre de travail. Il
          nous a permis de mieux appréhender le mouvement des marées dans notre
          projet, mais aussi de créer des espaces et des expériences qui
          joueront de ce cycle naturel. Il est ce qu’était le “modulor” pour le
          Corbusier, il est notre trame temporelle constructive. Pour
          matérialiser ces différentes strates invisibles nous avons décidé
          d’utiliser un béton banché qui reprendrait les différents états de
          cette montée des eaux. Le projet devient comme une sorte d’horloge du
          temps. Plus qu’un outil de travail, il s’agit là d’un système
          architectural en symbiose avec son contexte naturel.<br />Dans le
          projet le béton est le matériau dominant, mélange de sable et d’eau,
          il est le prolongement direct de notre milieu. C’est le matériau idéal
          pour le projet. Tout comme l’acier et le bois, nous avons expérimenté
          le béton, avant de le confronter au milieu marin afin de mieux
          anticiper ces réactions. Les caractéristiques structurelles,
          esthétiques et acoustiques du béton nous ont permis la mise en place
          du projet. Il utilise les qualités du béton pour être et créer
          l’espace.<br />En parcourant le projet, le marcheur est enveloppé
          d’une matérialité qui lui indique la nature du lieu dans lequel il se
          trouve. C’est la temp(s)pérature du projet. Le contact de l’acier,
          froid et humide, ou du béton gris encore mouillé et recouvert d’algues
          laisse présager un espace à l’expérience éphémère dans lequel l’eau va
          arriver. Tandis que le béton ocre indique un espace sec et durable,
          tout comme le bois, mais avec une notion de confort et de chaleur
          supplémentaire.
        </p>
        <p>
          Prolongement de la grande randonnée qui longe le sillon, le projet se
          veut comme un projet impersonnel qui tend plus à se rapprocher du
          paysage maritime que d’un programme en particulier. En ce sens, le
          programme vous devient personnel. Chaque promeneur, chacun d’entre
          nous se l’appropriera à sa façon. Certains le verront comme un refuge,
          d’autres comme un lieu de retraite, un panorama au plus près du large,
          voire pour les plus lyriques, un sanctuaire de la mer et de l’horizon.
          Le projet procure différentes sensations et offre différentes
          expériences du paysage. A chacun des pas du marcheur correspond un
          nouvel horizon, et donc un nouveau projet. Il suffit de se trouver au
          bon endroit au bon moment.
        </p>
        <div className="projet__divider projet__divider--thin" />
        <div className="projet__image--fullWidth">
          <img src={matiere} alt="matiere" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={banc} alt="banc" />
        </div>
        <div className="projet__image--fullWidth marginbottom">
          <img src={plan} alt="plan" />
        </div>
        <div
          className="projet__image--fullWidth"
          style={{ marginBottom: `140px` }}
        >
          <img src={coupes} alt="coupes" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={coupematiere} alt="coupe matiere" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={breche} alt="breche" />
        </div>
        <div className="projet__image--fullWidth">
          <img src={horizon} alt="horizon" />
        </div>
      </div>
    );
  }
}

P00.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
};

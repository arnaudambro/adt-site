import React from 'react';
import data_projets from '../../data_projets';

import './EB12.css';

import bois from './img/atelierdelalandetabourin-scierie-bois-EB12.jpg';
import plan from './img/atelierdelalandetabourin-entreprisebarillet-patio-EB12-plan.jpg';
import elevation1 from './img/atelierdelalandetabourin-entreprisebarillet-patio-EB12-elevation1.jpg';
import elevation2 from './img/atelierdelalandetabourin-entreprisebarillet-patio-EB12-elevation2.jpg';
import elevation3 from './img/atelierdelalandetabourin-entreprisebarillet-patio-EB12-elevation3.jpg';
import elevation4 from './img/atelierdelalandetabourin-entreprisebarillet-patio-EB12-elevation4.jpg';
import coupedetail from './img/atelierdelalandetabourin-entreprisebarillet-patio-EB12-coupedetail.jpg';
import facade from './img/atelierdelalandetabourin-entreprisebarillet-facade-EB12.jpg';
import facadepatio from './img/atelierdelalandetabourin-entreprisebarillet-facadepatio-EB12.jpg';
import couloirbureaux from './img/atelierdelalandetabourin-entreprisebarillet-couloir-bureaux-EB12.jpg';
import bureauxcompta from './img/atelierdelalandetabourin-entreprisebarillet-bureaux-compta-EB12.jpg';
import bureaux from './img/atelierdelalandetabourin-entreprisebarillet-bureaux-EB12.jpg';
import bureauxmiroir from './img/atelierdelalandetabourin-entreprisebarillet-bureaux-miroir-EB12.jpg';





export default class EB12 extends React.Component {


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

      <div className="projet projet__EB12 main__content projet__content">
        <div className="projet__title">{content.title}</div>
        <div className="projet__subtitle projet__subtitle--surface" dangerouslySetInnerHTML={content.surface[lang]}></div>
        <div className="projet__subtitle projet__subtitle--cost" dangerouslySetInnerHTML={content.cost[lang]}></div>
        <div className="projet__image--fullWidth">
          <img src={bois} alt='scierie' />
        </div>
        <div className="projet__divider projet__divider--thick"></div>
        <p>Spécialisée dans l’exploitation forestière et la scierie, la société est historiquement située au cœur de la forêt d’Orléans. La demande du client est d’étendre et de réhabiliter les 600m2 de locaux de son siège social. La proximité de la matière première, et de son usinage, s’est naturellement imposée comme le point de départ de notre réflexion et de la conception architecturale du projet.</p>
        <p>Le bâtiment s’organise aujourd’hui sous la forme d’un « U » autour d’un patio végétalisé. L’extension viendra aligner et refermer en partie le volume initial. Tandis qu’un couloir de verre traversera le patio pour faciliter les déplacements transitoires entre les ailes nord et sud. Ensuite, un long couloir intérieur dessert les différents espaces de l’entreprise.</p>
        <p>Notre intention première est d’apporter de la lumière et de la profondeur. Mais également une homogénéité esthétique entre cette longue déambulation circulaire et les espaces de travail desservis. Grâce à un jeu de claires-voies extérieures, la nouvelle façade écran apportera une continuité entre l’extension et l’existant. Une dynamique de tasseaux de bois thermo-chauffés, sous forme de grandes portes pivotantes, viendra animer la façade, tout en cachant le système de climatisation existant.</p>
        <p>Une nouvelle identité visuelle fidèle aux racines de l’entreprise.</p>
        <div className="projet__divider projet__divider--thin"></div>
        <div className="projet__image--fullWidth">
          <img src={plan} alt='plan' />
        </div>
        <div className="projet__image--fullWidth">
          <img src={elevation1} alt='elevation' />
        </div>
        <div className="projet__image--fullWidth">
          <img src={elevation2} alt='elevation' />
        </div>
        <div className="projet__image--fullWidth">
          <img src={elevation3} alt='elevation' />
        </div>
        <div className="projet__image--fullWidth">
          <img src={elevation4} alt='elevation' />
        </div>
        <div className="projet__image--fullWidth">
          <img src={coupedetail} alt='coupe - detail' />
        </div>
        <div className="projet__image--fullWidth">
          <img src={facade} alt='façade' />
        </div>
        <div className="projet__image--fullWidth">
          <img src={facadepatio} alt='façade patio' />
        </div>
        <div className="projet__image--fullWidth">
          <img src={couloirbureaux} alt='couloir bureaux' />
        </div>
        <div className="projet__image--fullWidth">
          <img src={bureauxcompta} alt='bureaux compta' />
        </div>
        <div className="projet__image--fullWidth">
          <img src={bureaux} alt='bureaux' />
        </div>
        <div className="projet__image--fullWidth">
          <img src={bureauxmiroir} alt='bureaux miroir' />
        </div>
      </div>


      )
  }
}

EB12.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
}

import React from 'react';
import data_projets from '../../data_projets';
import './P00.css';
// import salon from './atelierdelalandetabourin-hotel-morbihan-pierre-HD11-salon.jpg'
import ref from './atelierdelalandetabourin-hotel-morbihan-pierre-HD11-ref.jpg'
// import plan from './atelierdelalandetabourin-hotel-morbihan-pierre-HD11-plan.jpg'
// import parking from './atelierdelalandetabourin-hotel-morbihan-pierre-HD11-parking.jpg'
// import matiere from './atelierdelalandetabourin-hotel-morbihan-pierre-HD11-matiere.jpg'
// import coupe3 from './atelierdelalandetabourin-hotel-morbihan-pierre-HD11-coupe3.jpg'
// import coupe2 from './atelierdelalandetabourin-hotel-morbihan-pierre-HD11-coupe2.jpg'
// import coupe1 from './atelierdelalandetabourin-hotel-morbihan-pierre-HD11-coupe1.jpg'
// import coupe from './atelierdelalandetabourin-hotel-morbihan-pierre-HD11-coupe.jpg'
// import chambre from './atelierdelalandetabourin-hotel-morbihan-pierre-HD11-chambre.jpg'
// import bronzo from './atelierdelalandetabourin-hotel-morbihan-pierre-HD11-bronzo.jpg'
// import auray from './atelierdelalandetabourin-hotel-morbihan-pierre-HD11-auray.jpg'

export default class P00 extends React.Component {


  render() {

    const lang = this.props.language;
    const pageName = this.props.name;

    const content = {
      title: `${data_projets[`${pageName}`].name}.`,
      surface: {
        en: {
          __html: `Floor area: ${data_projets.P00.surface} m<sup>2<sup>`,
        },
        fr: {
          __html: `Surface: ${data_projets.P00.surface} m<sup>2<sup>`,
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

      <div className="projet projet__P00 main__content">
        <div className="projet__title">{content.title}</div>
        <div className="projet__subtitle projet__subtitle--surface" dangerouslySetInnerHTML={content.surface[lang]}></div>
        <div className="projet__subtitle projet__subtitle--cost" dangerouslySetInnerHTML={content.cost[lang]}></div>
        <div className="projet__image--fullWidth">
          <img src={ref} alt='dolmens et menhirs' />
        </div>
      </div>

      )
  }
}

P00.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
}

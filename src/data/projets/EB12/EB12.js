import React from 'react';
import data_projets from '../../data_projets';
import './EB12.css';
import plan from './atelierdelalandetabourin-hotel-morbihan-pierre-HD11-plan.jpg'


export default class EB12 extends React.Component {


  render() {

    const lang = this.props.language;

    const content = {
      title: `${data_projets.hd11.name}.`,
      surface: {
        en: `Floor area: ${data_projets.hd11.surface} m<sup>2<sup>`,
        fr: `Surface: ${data_projets.hd11.surface} m<sup>2<sup>`,
      },
      cost: {
        en: 'NC',
        fr: 'NC',
      }
    }

    return(

      <div className="projet projet__EB12">
        <div className="projet__title"></div>
        <div className="projet__subtitle projet__subtitle--surface" dangerouslySetInnerHTML={content.surface[lang]}></div>
        <div className="projet__subtitle projet__subtitle--cost" dangerouslySetInnerHTML={content.cost[lang]}></div>
        <div className="projet__image--fullWidth">
          <img src={plan} alt='dolmens et menhirs' />
        </div>
      </div>

      )
  }
}

EB12.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
}

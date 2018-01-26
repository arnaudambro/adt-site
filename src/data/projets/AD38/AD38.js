import React from 'react';
import data_projets from '../../data_projets';
import './AD38.css';
import ref from './atelierdelalandetabourin-hotel-morbihan-pierre-HD11-ref.jpg'


export default class AD38 extends React.Component {


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

      <div className="projet projet__AD38">
        <div className="projet__title"></div>
        <div className="projet__subtitle projet__subtitle--surface" dangerouslySetInnerHTML={content.surface[lang]}></div>
        <div className="projet__subtitle projet__subtitle--cost" dangerouslySetInnerHTML={content.cost[lang]}></div>
        <div className="projet__image--fullWidth">
          <img src={ref} alt='dolmens et menhirs' />
        </div>
      </div>

      )
  }
}

AD38.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
}

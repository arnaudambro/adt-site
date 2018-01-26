import React from 'react';
import { Link } from 'react-router-dom';
import data_projets from '../data/data_projets';

export default class Projets extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.area && this.props.area.scrollTo(0,0);
  }

  render() {

    const lang = this.props.language;

    const content = {
      callToClick: {
        en: 'click to discover the project',
        fr: 'cliquez pour découvrir le projet,'
      },
      delivery: {
        en(key) {
          if (data_projets[key].delivery) {
            if (Date.now() < data_projets[key].delivery) {
              return `Delivery ${data_projets[key].delivery.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`;
            } else {
              return `Delivered ${data_projets[key].delivery.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`;
            }
          } else {
            return '';
          }
        }, 
        fr(key) {
          if (data_projets[key].delivery) {
            if (Date.now() < data_projets[key].delivery) {
              return `Livraison ${data_projets[key].delivery.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}`;
            } else {
              return `Livré ${data_projets[key].delivery.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}`;
            }
          } else {
            return '';
          }
        },
      }
    }

    console.log();

    return(
        <div className="projets main__container">
          {Object
            .keys(data_projets)
            .sort((a, b) => data_projets[a].delivery > data_projets[b].delivery ? -1 : 1)
            .map((key, index) => 
              <div key={index} className="material main__content">
                <div className="material__container" style={{ gridRowEnd: `${data_projets[key].materialPicHeight}` }}>
                  <img 
                    src={data_projets[key].img}
                    alt={data_projets[key][lang].material}
                    style={{ objectFit: 'cover'}}>
                  </img>
                </div>
                <Link to={`projets/${data_projets[key].name}`} className="material__container--overlay" style={{ gridRowEnd: `${data_projets[key].materialPicHeight}` }}>
                  {data_projets[key][lang].material}
                </Link>
                <div className="material__projet--container column3--container">
                  <div className="material__projet--content">
                    <Link to={`projets/${data_projets[key].name}`} className="material__projet--headline">{data_projets[key].name} {data_projets[key].winDate.getFullYear()}</Link>
                    <span className="material__projet--title" 
                          dangerouslySetInnerHTML={data_projets[key][lang].title}>
                    </span>
                    <span className="material__projet--location">{data_projets[key][lang].city}, {data_projets[key][lang].departmentName}, {data_projets[key][lang].country}
                    </span>
                    <span className="material__projet--surface">{data_projets[key].surface} m<sup>2</sup></span>                     
                    <span className="material__projet--delivery">{content.delivery[`${lang}`](key)}</span>
                  </div>
                </div>
                
              </div>
            )
          }
          

        </div>
      )
  }
}

Projets.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
}



import React from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

import data_projets from '../data/data_projets';

export default class Projets extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      clickedMaterial: "0",
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleClickResponsive = this.handleClickResponsive.bind(this);
  }


  handleClick(e) {
    this.props.onarrowclick(this.contentArea);
    this.setState({ clickedMaterial: "0"})
  }

  handleClickResponsive(e) {
    let clickedState = this.state.clickedMaterial;
    if (clickedState === null) {
      clickedState = e.target.dataset.index;
      this.setState({ clickedMaterial: clickedState });
      return;
    } else if (clickedState !== e.target.dataset.index) {
      this.setState({ clickedMaterial: e.target.dataset.index });
    } else {
      // this.setState({ clickedMaterial: null });
      return;
    }
  }

  componentDidMount() {
    // this.props.area && this.props.area.scrollTo(0,0);
    // console.log(this.props.area);
  }

  render() {

    const lang = this.props.language;

    const content = {
      callToClick: {
        en: 'click to discover the project',
        fr: 'cliquez pour découvrir le projet,'
      },
      material: {
        en: 'Material',
        fr: 'Matière'
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

    return(
        <div 
          className={`projets main__container ${this.state.clickedMaterial !== null ? "active" : ""}`}
          ref={(contentArea) => { this.contentArea = contentArea }}>
          <Helmet>
            <title>ATD | Projets</title>
          </Helmet>
          {Object
            .keys(data_projets)
            .sort((a, b) => data_projets[a].winDate > data_projets[b].winDate ? -1 : 1)
            .map((key, index) => 
              <div key={index} className="material main__content">
                <Link
                  to={this.state.clickedMaterial === index.toString() ? `/projet/${key}` : `#`}
                  className={`material__container ${this.state.clickedMaterial === index ? "active" : ""}`} 
                  style={{ gridRowEnd: `${data_projets[key].materialPicHeight}` }}
                  onClick={this.handleClickResponsive}>
                  <img 
                    src={data_projets[key].img}
                    alt={data_projets[key][lang].material}
                    style={{ objectFit: 'cover'}}
                    data-index={index}>
                  </img>
                </Link>
                <Link
                  to={`/projet/${key}`} 
                  className="material__container material__container--overlay" 
                  style={{ gridRowEnd: `${data_projets[key].materialPicHeight}` }}>
                </Link>
                <div className={`material__projet--container column3--container ${this.state.clickedMaterial === index.toString() ? "active" : ""}`} style={{zIndex: `${Object.keys(data_projets).length + 100 - index}`}}>
                  <Link to={`/projet/${key}`} className="material__projet--content">
                    <div className="material__projet--headline">{data_projets[key].name} {data_projets[key].winDate.getFullYear()}</div>
                    <span className="material__projet--title" 
                          dangerouslySetInnerHTML={data_projets[key][lang].title}>
                    </span>
                    <span className="material__projet--location">{data_projets[key][lang].city}, {data_projets[key][lang].departmentName}, {data_projets[key][lang].country}
                    </span>
                    <span className="material__projet--surface">{data_projets[key].surface} m<sup>2</sup></span>                     
                    <span className="material__projet--delivery">{content.delivery[`${lang}`](key)}</span>
                    <span className="material__projet--delivery">{content.material[`${lang}`]}: <span dangerouslySetInnerHTML={data_projets[key][lang].material}></span></span>
                  </Link>
                </div>
                
              </div>
            )
          }
          
          <div className="main__container--marginbottom projets" onClick={this.handleClick}></div>
        </div>
      )
  }
}

Projets.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
}



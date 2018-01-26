import React from 'react';
import { Transition } from 'react-transition-group'

import picture1 from '../img/agence/picture1.jpg';
import picture2 from '../img/agence/picture2.jpg';
import picture3 from '../img/agence/picture3.jpg';
import picture4 from '../img/agence/picture4.jpg';
import picture5 from '../img/agence/picture5.jpg';
import picture6 from '../img/agence/picture6.jpg';
import picture7 from '../img/agence/picture7.jpg';
import picture8 from '../img/agence/picture8.jpg';


const duration = 200;
const timeout = 0;

const defaultStyle = {
  transition: `all ${duration}ms`,
  opacity: 0,
  transform: 'translateX(30px)'
}

const transitionStyles = {
  entering: { 
    opacity: 0,
    transform: 'translateX(30px)'
  },
  entered: { 
    opacity: 1,
    transform: 'translateX(0)'
  },
};


export default class Agence extends React.Component {

    constructor(props) {
      super(props);
      this.renderFrench = this.renderFrench.bind(this);
      this.renderEnglish = this.renderEnglish.bind(this);
      this.handleOver = this.handleOver.bind(this);

      this.state = {
        showAssociate5: false,
        showAssociate6: false,
        showAssociate7: false,
        showAssociate8: false,
      }
    }

    componentDidMount() {
      this.props.area && this.props.area.scrollTo(0,0);
    }

    handleOver(e) {
      switch (e.target.id) {
        case 'picture5' :
          this.setState({ showAssociate5: !this.state.showAssociate5 });
          break;
        case 'picture6' :
          this.setState({ showAssociate6: !this.state.showAssociate6 });
          break;
        case 'picture7' :
          this.setState({ showAssociate7: !this.state.showAssociate7 });
          break;
        case 'picture8' :
          this.setState({ showAssociate8: !this.state.showAssociate8 });
          break;
        default :
          break;
      }
    }

    renderEnglish() {
      return(
          <div className="agence">
           
              </div>
        )
      
    }

    renderFrench() {
      return(
          <div className="agence main__content">
            <div className="title atelier__title">
              <span>l'atelier</span>
            </div>
            <div className="atelier__description">
              <p>Fondé en 2016, l’atelier se positionne sur une réflexion contemporaine de l’architecture qui s’articule principalement autour d’un travail innovant et subtil de la matière. Tous nos projets naissent d’une volonté de révéler la matière qui doit être, là où il faut. Créer sans transgresser.</p>
              <p>Diplômés de l’ESA, passés par les agences Wilmotte & Associés.SA, Frédéric Borel, et Carl Fredrik Svenstedt, Nicolas Delalande et Sébastien Tabourin s’appuient sur leurs connaissances et leurs compétences transversales afin de vous proposer leur vision de l’architecture, de l’arcitecture d’intérieur et du design.</p>
            </div>
            <div className="atelier__picture1">
              <img src={picture1} alt="sillon dans un rocher de granit" className="picture1"/>
            </div>
            <div className="atelier__picture2">
              <img src={picture2} alt="vue sur la mer escala" className="picture2"/>
            </div>
            <div className="atelier__picture3">
              <img src={picture3} alt="dessin architectural" className="picture3"/>
            </div>
            <div className="agence__divider agence__divider1"></div>
            <div className="contact__top">
              <span className="contact__contact contact__title">contact:</span>
              <span className="contact__telephone contact__content">09.82.54.23.40</span>
              <span className="contact__email contact__content">contact@atelierdelalandetabourin.com</span>
            </div>
            <div className="agence__picture4">
              <img src={picture4} alt="agence" className="picture4"/>
            </div>
            <div className="contact__bottom">
              <span className="contact__adresse contact__content">adresse:</span>
              <span className="contact__adresse--line1 contact__content">44 rue du Faubourg du Temple</span>
              <span className="contact__adresse--line2 contact__content">75011 paris</span>
            </div>
            <div className="agence__divider agence__divider2"></div>
            <div className="title equipe__title">
              <span>l'équipe</span>
            </div>
            <div className="equipe__picture5">
              <img onMouseEnter={this.handleOver} onMouseLeave={this.handleOver} src={picture5} alt="dessin architectural" className={`picture5`} id="picture5"/>
            </div>
            <Transition in={this.state.showAssociate5} timeout={timeout}>
              {((transitionState) => 
                <div style={{...defaultStyle, ...transitionStyles[transitionState]}} className='equipe__description--container column3--container equipe__picture5--description'>
                  <div className={` equipe__description--content`}>
                    <span className="function">architecte associé</span>
                    <span className="name">nicolas delalande</span>
                    <p className="summary">Né en 1990<br />Architecte Diplômé d’Etat<br />Ecole Spéciale d’Architecture, 2014<br />Mention du Meilleur Diplôme, 2015</p>
                    <p className="prices"><b>Lauréat du Trophée Béton</b><br />2ème prix – 2016<br /><b>Lauréat du Grand Prix d’Architecture des Beaux-Arts</b> – 2016</p>
                    <p className="experiences"><b>Expériences:</b><br />M-Cube architectures, F.Borel architecture, ALC architectes, AWP – Agence de reconfiguration territoriale.</p>
                  </div>
                </div> 
              )}
            </Transition>
            <div className="equipe__picture6">
              <img onMouseEnter={this.handleOver} onMouseLeave={this.handleOver}  src={picture6} alt="dessin architectural" className={`picture6`} id="picture6"/>
            </div>
            <Transition in={this.state.showAssociate6} timeout={timeout}>
              {((transitionState) => 
                <div style={{...defaultStyle, ...transitionStyles[transitionState]}} className='equipe__description--container column3--container equipe__picture6--description'>
                  <div className={` equipe__description--content`}>
                    <span className="function">architecte associé</span>
                    <span className="name">sébastien tabourin</span>
                    <p className="summary"><b>Né en 1991<br />Architecte Diplômé d’Etat<br />Ecole Spéciale d’Architecture, 2014<br />Mention du Meilleur Diplôme, 2015</b></p>
                    <p className="prices"><b>Lauréat du Trophée Béton</b><br />2ème prix – 2016<br /><b>Lauréat du Grand Prix d’Architecture des Beaux-Arts</b> – 2016</p>
                    <p className="experiences"><b>Expériences:</b>Carl Fredrick Svenstedt architecte, Wilmotte&Associés, Jacques Rougerie architecte</p>
                  </div>
                </div> 
              )}
            </Transition>
            <div className="equipe__picture7">
              <img onMouseEnter={this.handleOver} onMouseLeave={this.handleOver}  src={picture7} alt="dessin architectural" className={`picture7`} id="picture7"/>
            </div>
            <Transition in={this.state.showAssociate7} timeout={timeout}>
              {((transitionState) => 
                <div style={{...defaultStyle, ...transitionStyles[transitionState]}} className='equipe__description--container column3--container equipe__picture7--description'>
                  <div className={` equipe__description--content`}>
                    <span className="function">architecte chargée de projet</span>
                    <span className="name">mathilde lizoret</span>
                    <p className="summary"><b>Née en 1993<br />Architecte Diplômée d’Etat<br />Ecole Spéciale d’Architecture, 2016<br />Félicitations du jury</b></p>
                    <p className="experiences"><b>Expériences:</b><br />Jean-Paul Viguier architecte, Paris,<br />BA75 architectes, Buenos Aires,<br />Richard+Shoeller architectes, Paris.</p>
                  </div>
                </div> 
              )}
            </Transition>
            <div className="equipe__picture8">
              <img onMouseEnter={this.handleOver} onMouseLeave={this.handleOver}  src={picture8} alt="dessin architectural" className={`picture8`} id="picture8"/>
            </div>
            <Transition in={this.state.showAssociate8} timeout={timeout}>
              {((transitionState) => 
                <div style={{...defaultStyle, ...transitionStyles[transitionState]}} className='equipe__description--container column3--container equipe__picture8--description'>
                  <div className={` equipe__description--content`}>
                    <span className="function">dessinatrice</span>
                    <span className="name">pauline taupin</span>
                    <p className="summary"><b>Née en 1995<br />ENSA Paris LA Vilette, Master 2</b></p>
                    <p className="experiences"><b>Expériences:</b><br />KOZ architectes, Paris</p>
                  </div>
                </div> 
              )}
            </Transition>
            <div className="agence__divider agence__divider3"></div>
          </div>
        )
      
    }

    render() {
      if (this.props.language === 'fr') {
        return this.renderFrench();
      } else {
        return this.renderEnglish();
      }
    }
  
}

Agence.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
}

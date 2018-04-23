import React from 'react';
// import PropTypes from 'prop-types';
import hero from '../img/hero.jpg';
import hero_mobile from '../img/hero_mobile.jpg';
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import FaAngleDown from 'react-icons/lib/fa/angle-down';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    // this.handleWheel = this.handleWheel.bind(this);
  }

  handleClick() {
    this.props.handleShow();
  }

  // handleWheel(e) {
  //   console.log(e.target);
  // }

  render() {
    return (
      <Link
        to="/projets"
        onClick={this.handleClick}
        className="landing"
        title="ADT: une mise en architecture de la matière"
        style={{
          backgroundImage: `url(${
            window.innerWidth < 500 ? hero_mobile : hero
          })`
        }}
      >
        <Helmet>
          <title>Atelier Delalande Tabourin | Architectes</title>
        </Helmet>
        <div className="calltoscroll-div">
          <FaAngleDown className="scroll-icon" size={60} />
        </div>
        <div className="logo" style={{ backgroundImage: `url(${logo})` }} />
      </Link>
    );
  }
}

Landing.propTypes = {
  // handleShow: PropTypes.function,
};

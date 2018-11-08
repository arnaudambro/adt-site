import React from 'react';
// import PropTypes from 'prop-types';
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import video from '../img/rain.mp4';
import poster from '../img/poster.png';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    // this.handleWheel = this.handleWheel.bind(this);
  }

  componentDidMount() {
    this.video.playbackRate = 0.5;
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
      >
        <Helmet>
          <title>Atelier Delalande Tabourin | Architectes</title>
        </Helmet>

        <video
          src={video}
          ref={vid => (this.video = vid)}
          className="video"
          autoPlay="true"
          muted="true"
          loop="true"
          preload="true"
          poster={poster}
        />
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

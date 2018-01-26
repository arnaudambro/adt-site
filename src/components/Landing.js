import React from 'react';
import imagetuilerie from '../img/imagetuilerie.jpg';
import { Link } from 'react-router-dom';


export default class Landing extends React.Component {
  //constructor(props) {
    // super(props);
    // state = {};
  // }

  render() {

    return(
      <Link to='/projets' className="landing">
        <img src={imagetuilerie} alt="une tuilerie"/>
      </Link>

      )
  }
}

Landing.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
}

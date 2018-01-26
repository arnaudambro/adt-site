import React from 'react';
import { NavLink } from 'react-router-dom';
import menu from '../data/menu';

export default class Header extends React.Component {

  render() {

    return (
      <header className="header">
        <h1 className="header__companyName">
          <span>atelier</span>
          <span>delalande</span>
          <span>tabourin</span>
        </h1>
        <div className="header__divider"></div>
        <ul className="header__menu menu__items">
        {Object
          .keys(menu)
          .map((key, index) => 
              <li 
                key={index} 
                className={`menu__items--item item ${index} ${menu[key].active ? 'active' : ''}`}>
                <NavLink to={`/${key}`} activeClassName="active">{menu[key].fr}</NavLink>
              </li>
              )}
              
        </ul>
      </header>


    )
  }

}

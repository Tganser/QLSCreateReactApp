import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return(
    <div>
      <NavLink to="/" activeClassName="active"> Home </NavLink>
      {" | "}
      <NavLink to="/about" activeClassName="active"> About </NavLink>
      {" | "}
      <NavLink to="/admin" activeClassName="active"> Admin </NavLink>
      {" | "}
      <NavLink to="/input" activeClassName="active"> Input </NavLink>
      {" | "}
      <NavLink to="/query" activeClassName="active"> Query </NavLink>
    <h3>Quercus Land Stewardship Services</h3>
  </div>
  );
};

export default Header;

import React from 'react';
import {NavLink} from 'react-router-dom';
import MenuAppBar from './MenuAppBar'

const Header = () => {
  return(
    <div>
      <MenuAppBar />
      <NavLink to="/" activeClassName="active"> Home </NavLink>
      {" | "}
      <NavLink to="/about" activeClassName="active"> About </NavLink>
      {" | "}
      <NavLink to="/admin" activeClassName="active"> Admin </NavLink>
      {" | "}
      <NavLink to="/input" activeClassName="active"> Input </NavLink>
      {" | "}
      <NavLink to="/query" activeClassName="active"> Query </NavLink>
  </div>
  );
};

export default Header;

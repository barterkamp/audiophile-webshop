import React from "react";
import { NavLink } from "react-router-dom";

const NavigationLinks = () => {
  return (
    <ul className="navigation__links">
      <li>
        <NavLink
          exact
          activeClassName="active"
          className="navigation__link"
          to="/"
        >
          home
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName="active"
          className="navigation__link"
          to="/headphones"
        >
          headphones
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName="active"
          className="navigation__link"
          to="/speakers"
        >
          speakers
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName="active"
          className="navigation__link"
          to="/earphones"
        >
          earphones
        </NavLink>
      </li>
    </ul>
  );
};

export default NavigationLinks;

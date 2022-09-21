import React from "react";
import { NavLink } from "react-router-dom";

const MobileNavigation = (props) => {
  const handleClose = () => props.isMobile && props.closeMobileMenu();

  return (
    <div className="navigation__mobile">
      <ul className="navigation__mobile-links">
        <li onClick={handleClose}>
          <NavLink
            exact
            activeClassName="active"
            className="navigation__link"
            to="/"
          >
            home
          </NavLink>
        </li>
        <li onClick={handleClose}>
          <NavLink
            activeClassName="active"
            className="navigation__link"
            to="/headphones"
          >
            headphones
          </NavLink>
        </li>
        <li onClick={handleClose}>
          <NavLink
            activeClassName="active"
            className="navigation__link"
            to="/speakers"
          >
            speakers
          </NavLink>
        </li>
        <li onClick={handleClose}>
          <NavLink
            activeClassName="active"
            className="navigation__link"
            to="/earphones"
          >
            earphones
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavigation;

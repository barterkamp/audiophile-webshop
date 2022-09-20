import React from "react";
import { Link } from "react-router-dom";

const MobileNavigation = (props) => {
  const handleClose = () => props.isMobile && props.closeMobileMenu();

  return (
    <div className="navigation__mobile">
      <ul className="navigation__mobile-links">
        <li onClick={handleClose}>
          <Link className="navigation__link" to="/">
            home
          </Link>
        </li>
        <li onClick={handleClose}>
          <Link className="navigation__link" to="/headphones">
            headphones
          </Link>
        </li>
        <li onClick={handleClose}>
          <Link className="navigation__link" to="/speakers">
            speakers
          </Link>
        </li>
        <li onClick={handleClose}>
          <Link className="navigation__link" to="/earphones">
            earphones
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavigation;

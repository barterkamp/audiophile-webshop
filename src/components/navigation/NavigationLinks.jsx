import React from "react";
import { Link } from "react-router-dom";

const NavigationLinks = () => {
  return (
    <ul className="navigation__links">
      <li>
        <Link className="navigation__link" to="/">
          home
        </Link>
      </li>
      <li>
        <Link className="navigation__link" to="/headphones">
          headphones
        </Link>
      </li>
      <li>
        <Link className="navigation__link" to="/speakers">
          speakers
        </Link>
      </li>
      <li>
        <Link className="navigation__link" to="/earphones">
          earphones
        </Link>
      </li>
    </ul>
  );
};

export default NavigationLinks;

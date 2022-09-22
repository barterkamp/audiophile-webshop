import React from "react";
import { NavLink } from "react-router-dom";

const NavigationLinks = () => {
  return (
    <ul className="navigation__links">
      <li>
        <NavLink
          end
          className={({ isActive }) =>
            isActive ? "navigation__link active" : "navigation__link"
          }
          to="/"
        >
          home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navigation__link active" : "navigation__link"
          }
          to="/headphones"
        >
          headphones
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navigation__link active" : "navigation__link"
          }
          to="/speakers"
        >
          speakers
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navigation__link active" : "navigation__link"
          }
          to="/earphones"
        >
          earphones
        </NavLink>
      </li>
    </ul>
  );
};

export default NavigationLinks;

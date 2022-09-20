import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <ul className="footer__navlinks">
      <li>
        <Link className="footer__link" to="/">
          home
        </Link>
      </li>
      <li>
        <Link className="footer__link" to="/headphones">
          headphones
        </Link>
      </li>
      <li>
        <Link className="footer__link" to="/speakers">
          speakers
        </Link>
      </li>
      <li>
        <Link className="footer__link" to="/earphones">
          earphones
        </Link>
      </li>
    </ul>
  );
};

export default FooterLinks;

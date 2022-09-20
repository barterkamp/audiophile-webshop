import React from "react";
import Facebook from "./icon-facebook.svg";
import Instagram from "./icon-instagram.svg";
import Twitter from "./icon-twitter.svg";
import AudiophileLogo from "../../../logo.svg";
import { Link } from "react-router-dom";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer className="wrapper">
      <div className="footer footer__section container">
        {/* grid-item 1 */}
        <div className="footer__navigation">
          <div className="logo">
            <Link to="/">
              <img src={AudiophileLogo} alt="" />
            </Link>
          </div>
          <div className="footer__links">
            <FooterLinks />
          </div>
        </div>
        <div className="footer__info">
          <p className="font-grey">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
        </div>
        <div className="footer__socials">
          <p className="font-grey">Copyright 2021. All Rights Reserved</p>
          <div className="social-icons">
            <div>
              <a className="social-link" href="http://www.facebook.com">
                <img className="social-icon" src={Facebook} alt="" />
              </a>
            </div>
            <div>
              <a className="social-link" href="http://www.instagram.com">
                <img className="social-icon" src={Instagram} alt="" />
              </a>
            </div>
            <div>
              <a className="social-link" href="http://www.twitter.com">
                <img className="social-icon" src={Twitter} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

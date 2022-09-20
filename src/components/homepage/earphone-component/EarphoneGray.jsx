import React from "react";
import { Link } from "react-router-dom";
import EarhoneDesktop from "./yx1-desktop.jpg";
import EarphoneTablet from "./yx1-tablet.jpg";
import EarphoneMobile from "./yx1-mobile.jpg";

const EarphoneGray = ({ products }) => {
  return (
    <section className="earphone-gray container">
      <div className="earphone-gray__container">
        <div className="earphone-gray__image">
          <picture>
            {/* Mobile */}
            <source
              srcSet={EarphoneMobile}
              media="(max-width: 420px)"
            />

            {/* tablet */}
            <source
              srcSet={EarphoneTablet}
              media="(max-width: 1024px)"
            />

            <img
              src={EarhoneDesktop}
              alt="The black YX1 wireless earphones on a black background"
            />
          </picture>
        </div>
        {products
          .filter((item) => item.name === "YX1 Wireless Earphones")
          .map((item) => (
            <div className="earphone-gray__info-container" key={item.id}>
              <div className="earphone-gray__info">
                <h4>{item.name}</h4>

                <Link to={`/earphones/${item.name}`}>
                  <button className="btn btn-secondary">see product</button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default EarphoneGray;

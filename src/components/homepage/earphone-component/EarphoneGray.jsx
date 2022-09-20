import React from "react";
import { Link } from "react-router-dom";

const EarphoneGray = ({ products }) => {
  return (
    <section className="earphone-gray container">
      <div className="earphone-gray__container">
        <div className="earphone-gray__image">
          <picture>
            {/* Mobile */}
            <source
              srcSet="
            ../../assets/home/mobile/image-earphones-yx1.jpg
            "
              media="(max-width: 420px)"
            />

            {/* tablet */}
            <source
              srcSet="
            ../../assets/home/tablet/image-earphones-yx1.jpg
            "
              media="(max-width: 1024px)"
            />

            <img
              src="../../assets/home/desktop/image-earphones-yx1.jpg"
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

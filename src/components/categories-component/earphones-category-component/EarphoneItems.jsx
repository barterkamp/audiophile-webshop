import React from "react";
import { Link } from "react-router-dom";

const EarphonesItems = ({ categoryImage, name, description }) => {
  return (
    <>
      <div className="categoryItems container">
        <article className="categoryItems__container margin-large">
          <div className="categoryItems-preview grid-left">
            <picture>
              {/* mobile image */}
              <source
                srcSet={process.env.PUBLIC_URL + categoryImage.mobile}
                media="(max-width: 420px)"
              />

              {/* tablet image*/}
              <source
                srcSet={process.env.PUBLIC_URL + categoryImage.tablet}
                media="(max-width: 1024px)"
              />
              <img
                src={process.env.PUBLIC_URL + categoryImage.desktop}
                alt={`The ${name} against a grey background`}
              />
            </picture>
          </div>
          <div className="categoryItems__info grid-right">
            <h2>{name}</h2>
            <p>{description}</p>

            <Link to={`/earphones/${name}`}>
              <button className="btn btn-primary">see product</button>
            </Link>
          </div>
        </article>
      </div>
    </>
  );
};

export default EarphonesItems;

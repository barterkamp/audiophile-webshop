import React from "react";
import { Link } from "react-router-dom";

const SpeakerItems = ({
  index,

  categoryImage,
  name,
  description,
}) => {
  return (
    <>
      {index % 2 === 0 ? (
        <div className="categoryItems">
          <article className="categoryItems__container margin-large">
            <div className="categoryItems-preview grid-left">
            <picture>
                {/* mobile image */}
                <source
                  srcSet={categoryImage.mobile}
                  media="(max-width: 420px)"
                />

                {/* tablet image*/}
                <source
                  srcSet={categoryImage.tablet}
                  media="(max-width: 1024px)"
                />

                <img
                  src={categoryImage.desktop}
                  alt={`The ${name} against a grey background`}
                />
              </picture>
            </div>
            <div className="categoryItems__info grid-right">
              <h2>{name}</h2>
              <p>{description}</p>

              <Link to={`/speakers/${name}`}>
                <button className="btn btn-primary">see product</button>
              </Link>
            </div>
          </article>
        </div>
      ) : (
        <div className="categoryItems">
          <article className="categoryItems__container margin-large">
            <div className="categoryItems__info grid-left-2 flex-order-reverse">
              <h2>{name}</h2>
              <p>{description}</p>

              <Link to={`/speakers/${name}`}>
                <button className="btn btn-primary">see product</button>
              </Link>
            </div>
            <div className="item-preview grid-right-2">
            <picture>
                {/* mobile image */}
                <source
                  srcSet={categoryImage.mobile}
                  media="(max-width: 420px)"
                />

                {/* tablet image*/}
                <source
                  srcSet={categoryImage.tablet}
                  media="(max-width: 1024px)"
                />

                <img
                  src={categoryImage.desktop}
                  alt={`The ${name} against a grey background`}
                />
              </picture>
            </div>
          </article>
        </div>
      )}
    </>
  );
};

export default SpeakerItems;

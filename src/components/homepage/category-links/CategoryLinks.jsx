import React from "react";
import { Link } from "react-router-dom";
import Headphone from "./thumbnail-headphones.png";
import Earphone from "./thumbnail-earphones.png";
import Speaker from "./thumbnail-speakers.png";

const CategoryLinks = () => {
  return (
    <section className="category-links  container margin-large">
      <div className="category-links__section ">
        {/* grid-item 1 */}
        <div className="category-links__container category-links__headphones">
          <div className="category-links__info">
            <h6>headphones</h6>
            <Link to="/headphones">
              <button className="btn btn-tertiary">shop</button>
            </Link>
          </div>
          <div className="category-links__image">
            <img
              className="category-links__thumbnail-1"
              src={Headphone}
              alt="Thumbnail of a black headphone"
            />
          </div>
        </div>

        {/* grid-item 2 */}
        <div className="category-links__container category-links__speakers">
          <div className="category-links__info">
            <h6>speakers</h6>
            <Link to="/speakers">
              <button className="btn btn-tertiary">shop</button>
            </Link>
          </div>
          <div className="category-links__image">
            <img
              className="category-links__thumbnail-2"
              src={Speaker}
              alt="Thumbnail of a black speaker"
            />
          </div>
        </div>

        {/* grid-item 3 */}
        <div className="category-links__container category-links__earphones">
          <div className="category-links__info">
            <h6>earphones</h6>
            <Link to="/earphones">
              <button className="btn btn-tertiary">shop</button>
            </Link>
          </div>
          <div className="category-links__image">
            <img
              className="category-links__thumbnail-3"
              src={Earphone}
              alt="Thumbnail of a black earphone"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryLinks;

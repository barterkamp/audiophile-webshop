import React from "react";
import { Link } from "react-router-dom";

const SpeakerGray = ({ products }) => {
  return (
    <section className="speaker-gray container margin-small">
      <div className="speaker-gray__container ">
        {products
          .filter((item) => item.name === "ZX7 Speaker")
          .map((item) => (
            <div className="speaker-gray__info" key={item.id}>
              <h4>{item.name}</h4>
              <Link to={`/speakers/${item.name}`}>
                <button className="btn btn-secondary">see product</button>
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
};

export default SpeakerGray;

import React from "react";
import { Link } from "react-router-dom";

const SpeakerOrange = ({ products }) => {
  return (
    <section className="speaker-orange container">
      <div className="speaker-orange__container margin-small">
        <div className="speaker-orange__image">
          <img
            className="speaker-orange__image-1"
            src="../../assets/home/desktop/image-speaker-zx9.png"
            alt="The ZX9 Speaker"
          />
        </div>
        {products
          .filter((item) => item.name === "ZX9 Speaker")
          .map((item) => (
            <div className="speaker-orange__info" key={item.id}>
              <h1 className="font-white">{item.name}</h1>
              <p className="font-white">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link to={`/speakers/${item.name}`}>
                <button className="btn btn-secondary--black">
                  see product
                </button>
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
};

export default SpeakerOrange;

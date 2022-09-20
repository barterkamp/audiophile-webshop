import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ products }) => {
  return (
    <header className="wrapper wrapper-background">
      <div className="hero__section container">
        {products
          .filter((item) => item.category === "headphones" && item.new === true)
          .map((item) => (
            <>
              <div key={item.id} className="hero__info">
                <p className="overline">new product</p>
                <h1 className="font-white">XX99 Mark II HeadphoneS</h1>
                <p className="font-grey ">
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music enthusiast.
                </p>

                <Link to={`/headphones/${item.name}`}>
                  <button className="btn btn-primary">see product</button>
                </Link>
              </div>
            </>
          ))}
      </div>
    </header>
  );
};

export default Hero;

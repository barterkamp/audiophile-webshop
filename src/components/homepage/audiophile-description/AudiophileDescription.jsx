import React from "react";
import PortraitDesktop from "./portrait-desktop.jpg";
import PortraitTablet from "./portrait-tablet.jpg";
import PortraitMobile from "./portrait-mobile.jpg";

const AudiophileDescription = () => {
  return (
    <section className="container margin-large">
      <div className="audiophile-container">
        <div className="audiophile-description__info item-info  grid-left-2">
          <h2>
            Bringing you the <span className="font-accent">best</span> audio
            gear
          </h2>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="audiophile-description__image grid-right-2">
          <picture>
            {/* Mobile */}
            <source
              srcSet={PortraitMobile}
              media="(max-width: 420px)"
            />

            {/* tablet */}
            <source
              srcSet={PortraitTablet}
              media="(max-width: 1024px)"
            />

            <img
              src={PortraitDesktop}
              alt="A young man with a black headphone on his head enyoing music while staring outside a window."
              style={{ borderRadius: "8px" }}
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default AudiophileDescription;

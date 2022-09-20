import React from "react";
import SpeakerItems from "./SpeakerItems";
import CategoryLinks from "../../homepage/category-links/CategoryLinks";
import AudiophileDescription from "../../homepage/audiophile-description/AudiophileDescription";
import Footer from "../../homepage/footer-component/Footer";

const SpeakersContainer = ({ products }) => {
  return (
    <>
      <main>
        <section className="container">
          {products
            .filter((item) => item.category === "speakers")
            .slice(0)
            .reverse()
            .map((item, index) => (
              <SpeakerItems key={item.id} index={index} {...item} />
            ))}
        </section>
        <CategoryLinks />
        <AudiophileDescription />
      </main>
      <Footer />
    </>
  );
};

export default SpeakersContainer;

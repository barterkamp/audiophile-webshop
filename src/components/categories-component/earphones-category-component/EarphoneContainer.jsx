import React from "react";
import EarphonesItems from "./EarphoneItems";
import CategoryLinks from "../../homepage/category-links/CategoryLinks";
import AudiophileDescription from "../../homepage/audiophile-description/AudiophileDescription";
import Footer from "../../homepage/footer-component/Footer";

const EarphonesContainer = ({ products }) => {
  return (
    <>
      <main>
        <section className="container">
          {products
            .filter((item) => item.category === "earphones")
            .slice(0)
            .reverse()
            .map((item, index) => (
              <EarphonesItems key={item.id} index={index} {...item} />
            ))}
        </section>
        <CategoryLinks />
        <AudiophileDescription />
      </main>
      <Footer />
    </>
  );
};

export default EarphonesContainer;

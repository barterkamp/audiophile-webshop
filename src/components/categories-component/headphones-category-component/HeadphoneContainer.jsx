import React from "react";
import HeadphoneItems from "./HeadphoneItems";
import CategoryLinks from "../../homepage/category-links/CategoryLinks";
import AudiophileDescription from "../../homepage/audiophile-description/AudiophileDescription";
import Footer from "../../homepage/footer-component/Footer";

const HeadphoneContainer = ({ products }) => {
  return (
    <>
      <main>
        <section className="container categories">
          {products
            .filter((item) => item.category === "headphones")
            .slice(0)
            .reverse()
            .map((item, index) => (
              <HeadphoneItems key={item.id} index={index} {...item} />
            ))}
        </section>
        <CategoryLinks />
        <AudiophileDescription />
      </main>
      <Footer />
    </>
  );
};

export default HeadphoneContainer;

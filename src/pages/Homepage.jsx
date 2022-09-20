import React from "react";
import AudiophileDescription from "../components/homepage/audiophile-description/AudiophileDescription";
import CategoryLinks from "../components/homepage/category-links/CategoryLinks";
import Hero from "../components/homepage/hero-component/Hero";
import SpeakerOrange from "../components/homepage/speaker-component/SpeakerOrange";
import SpeakerGray from "../components/homepage/speaker-component/SpeakerGray";
import EarphoneGray from "../components/homepage/earphone-component/EarphoneGray";
import Footer from "../components/homepage/footer-component/Footer";

const Home = ({ products }) => {
  return (
    <div>
      <Hero products={products} />
      <main>
        <CategoryLinks />
        <SpeakerOrange products={products} />
        <SpeakerGray products={products} />
        <EarphoneGray products={products} />
        <AudiophileDescription />
        <Footer />
      </main>
    </div>
  );
};

export default Home;

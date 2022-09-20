import React from "react";
import SpeakersContainer from "../components/categories-component/speakers-category-component/SpeakerContainer";

const Speakers = ({ products }) => {
  return (
    <>
      <header className="wrapper">
        <h2 className="heading">speakers</h2>
      </header>
      <SpeakersContainer products={products} />
    </>
  );
};

export default Speakers;

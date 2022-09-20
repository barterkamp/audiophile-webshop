import React from "react";
import { useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import CategoryLinks from "../../homepage/category-links/CategoryLinks";
import AudiophileDescription from "../..//homepage/audiophile-description/AudiophileDescription";
import Footer from "../../homepage/footer-component/Footer";
import { addToCart } from "../../../features/cart/cartSlice";

const HeadphoneItem = ({ products }) => {
  const { name } = useParams();
  const headphones = products.find((item) => item.name === name);

  const [amount, setAmount] = React.useState(1);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...headphones, quantity: amount }));
  };

  const handleDecrease = () =>
    setAmount((prevAmount) => (prevAmount <= 1 ? 1 : prevAmount - 1));

  const handleIncrease = () => setAmount((prevAmount) => prevAmount + 1);

  return (
    <>
      <main>
        <div className="container">
          <div className="goback">
            <Link to="/headphones" className="goback-link">
              Go Back
            </Link>
          </div>
          {/* first section */}
          <article className="single-item__container-grid ">
            <div className="item-preview grid-left">
              <picture>
                {/* mobile image */}
                <source
                  srcSet={headphones.image.mobile}
                  media="(max-width: 430px)"
                />

                {/* tablet image*/}
                <source
                  srcSet={headphones.image.tablet}
                  media="(max-width: 1024px)"
                />

                <img
                  src={headphones.image.desktop}
                  alt={`The ${name} against a grey background`}
                />
              </picture>
            </div>
            <div className="item-info grid-right">
              <h2>{headphones.name}</h2>
              <p>{headphones.description}</p>
              <p className="price">$ {headphones.price}</p>
              <div className="item-buttons">
                <button className="btn-amount" onClick={handleDecrease}>
                  -
                </button>
                <p className="amount">{amount}</p>
                <button className="btn-amount" onClick={handleIncrease}>
                  +
                </button>
                <button
                  onClick={handleAddToCart}
                  className="btn btn-primary margin-left"
                >
                  add to cart
                </button>
              </div>
            </div>
          </article>

          {/* second section */}
          <article className="single-item__container margin-large">
            <div className="single-item__features">
              <h3>features</h3>
              <p>{headphones.features}</p>
            </div>
            <div className="single-item__inthebox">
              <h3>in the box</h3>
              <ul className="item-list">
                {headphones.includes.map((item) => (
                  <li>
                    <span className="item-quantity">{item.quantity}x</span>{" "}
                    <span className="item-description">{item.item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <section className="signle-item">
            <div className="single-item__gallery gallery-grid">
              <div className="gallery-image-1">
                <img
                  className="gallery-photo"
                  src={headphones.gallery.first.desktop}
                  alt={`The ${headphones.name}`}
                />
              </div>
              <div className="gallery-image-2">
                <img
                  className="gallery-photo"
                  src={headphones.gallery.second.desktop}
                  alt={`The ${headphones.name}`}
                />
              </div>
              <div className="gallery-image-3">
                <img
                  className="gallery-photo"
                  src={headphones.gallery.third.desktop}
                  alt={`The ${headphones.name}`}
                />
              </div>
            </div>
          </section>

          <CategoryLinks />
          <AudiophileDescription />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HeadphoneItem;

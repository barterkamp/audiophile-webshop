import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  clearCart,
  incrementQuantity,
  decrementQuantity,
} from "../../features/cart/cartSlice";

const CartModal = ({ setIsOpen }) => {
  const dispatch = useDispatch();

  const { cartItems, totalPrice, totalQuantity } = useSelector(
    (state) => state.cart
  );

  const handleRemoveAll = () => dispatch(clearCart());

  if (totalQuantity < 1) {
    return (
      <>
        <div
          className="modal modal__background"
          onClick={() => setIsOpen(false)}
          role="button"
        ></div>
        <div className="modal__position">
          <div className="modal__container">
            <div className="modal__empty-cart">
              <p>Your cart is currently empty.</p>
              <button className="btn-close" onClick={() => setIsOpen(false)}>
                X
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else
    return (
      <>
        <div
          className="modal modal__background"
          onClick={() => setIsOpen(false)}
          role="button"
        ></div>
        <div className="modal__position">
          <div className="modal__container">
            <header className="modal__header">
              <h6>cart ({totalQuantity})</h6>
              <p className="modal__remove-items" onClick={handleRemoveAll}>
                Remove all items
              </p>
              <button className="btn-close" onClick={() => setIsOpen(false)}>
                X
              </button>
            </header>
            <div className="modal__items">
              {cartItems?.map((item) => (
                <>
                  <div className="modal__item" key={item.id}>
                    <div className="modal__item-image">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/cart/image-${item.slug}.jpg`}
                        alt={`thumbnail of the ${item.name}`}
                      />
                    </div>

                    <div className="modal__item-productandprice">
                      <p className="model__item-product bold">
                        {item.name.split(" ").slice(0, -1).join(" ")}
                      </p>
                      <p className="model__item-price">$ {item.price}</p>
                    </div>
                    <div className="item-buttons">
                      <button
                        className="btn-amount--small"
                        onClick={() => dispatch(decrementQuantity(item))}
                      >
                        -
                      </button>
                      <p className="amount--small">{item.quantity}</p>

                      <button
                        className="btn-amount--small"
                        onClick={() => dispatch(incrementQuantity(item))}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </>
              ))}
            </div>

            <div className="modal__total">
              <p className="uppercase">Total</p>
              <p className="modal__total-price bold">$ {totalPrice}</p>
            </div>

            <button
              className="btn btn-primary"
              onClick={() => setIsOpen(false)}
            >
              <Link to="checkout">checkout</Link>
            </button>
          </div>
        </div>
      </>
    );
};

export default CartModal;

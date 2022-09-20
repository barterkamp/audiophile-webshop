import React from "react";
import { useSelector } from "react-redux";

const CheckoutSummary = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  return (
    <aside className="summary summary__container ">
      <h6>summary</h6>

      {cartItems?.map((item) => (
        <>
          <div className="summary__item" key={item.id}>
            <div className="summary__item-image">
              <img
                src={`${process.env.PUBLIC_URL}/assets/cart/image-${item.slug}.jpg`}
                alt={`thumbnail of the ${item.name}`}
              />
            </div>

            <div className="summary__item-productandprice">
              <p className="summary__item-product bold">
                {item.name.split(" ").slice(0, -1).join(" ")}
              </p>
              <p className="summary__item-price">$ {item.price}</p>
            </div>

            <div className="summary__item-quantity">
              <p>x{item.quantity}</p>
            </div>
          </div>
        </>
      ))}
      <div className="summary__totals">
        <div className="summary__total">
          <p className="uppercase">Total</p>
          <p className="summary__total-price bold">$ {totalPrice}</p>
        </div>
        <div className="summary__total">
          <p className="uppercase">Shipping</p>
          <p className="summary__total-price bold">$ 50</p>
        </div>
        <div className="summary__total">
          <p className="uppercase">vat (included)</p>
          <p className="summary__total-price bold">
            $ {Math.round(totalPrice * 0.2)}
          </p>
        </div>
      </div>
      <div className="summary__total">
        <p className="uppercase">grand total</p>
        <p className="summary__total-price bold accent">
          $ {Math.round(totalPrice * 0.2 + totalPrice + 50)}
        </p>
      </div>
      <button className="btn btn-primary">continue &#38; pay</button>
    </aside>
  );
};

export default CheckoutSummary;

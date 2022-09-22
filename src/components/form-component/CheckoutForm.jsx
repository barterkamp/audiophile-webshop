import React from "react";

const CheckoutForm = () => {
  return (
    <>
      <form className="checkout-form">
        <h5 className="checkout-header">checkout</h5>
        <span className="subtitle checkout-subtitle margin-small block">
          billing details
        </span>
        <div className="checkout-block">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
        </div>

        <span className="subtitle checkout-subtitle margin-small block">
          Shipping info
        </span>
        <div className="checkout-block">
          <div className="input-group full-width">
            <label htmlFor="name">Address</label>
            <input type="text" id="address" name="address" required />
          </div>
          <div className="input-group">
            <label htmlFor="zip-code">Zip Code</label>
            <input type="text" id="zip-code" name="zip-code" required />
          </div>
          <div className="input-group">
            <label htmlFor="text">City</label>
            <input type="text" id="text" name="text" required />
          </div>
          <div className="input-group">
            <label htmlFor="text">Country</label>
            <input type="text" id="country" name="country" required />
          </div>
        </div>

        <span className="subtitle checkout-subtitle margin-small block">
          Payment Method
        </span>
        <p>
          <em>
            Hier zouden de verschillende payment opties komen te staan bij een
            echte webshop.
          </em>
        </p>
      </form>
    </>
  );
};

export default CheckoutForm;

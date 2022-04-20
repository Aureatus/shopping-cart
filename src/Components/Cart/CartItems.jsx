import React from "react";

import "../../Styles/Cart/CartItems.css";

const CartItems = (props) => {
  const calculatePrice = (price, amount) => {
    if (Math.floor(price) === price) {
      return price * amount.toFixed(2);
    }
    price = Number(price).toFixed(2);
    return (price * amount).toFixed(2);
  };
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={props.image} alt="" />
      </div>
      <p className="item-name">{props.title}</p>
      <div className="amount-container">
        <p className="item-amount">Amount: {props.amount}</p>
        <input
          type="number"
          id="cart-item-amount"
          defaultValue={props.amount}
          onChange={() => {
            props.changeCartItemAmount(
              props.index,
              document
                .querySelectorAll(".cart-item")
                [props.index].querySelector("#cart-item-amount").value
            );
          }}
        />
      </div>
      <p className="item-price">£{calculatePrice(props.price, props.amount)}</p>
    </div>
  );
};

export default CartItems;

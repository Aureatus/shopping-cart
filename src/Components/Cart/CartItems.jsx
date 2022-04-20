import React from "react";

import "../../Styles/Cart/CartItems.css";

const CartItems = (props) => {
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={props.image} alt="" />
      </div>
      <p className="item-name">{props.title}</p>
      <div className="amount-container">
        <p className="item-amount">Amount: {props.amount}</p>
      </div>
      <p className="item-price">£{props.price * props.amount}</p>
    </div>
  );
};

export default CartItems;

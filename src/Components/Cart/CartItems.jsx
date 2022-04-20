import React from "react";

import "../../Styles/Cart/CartItems.css";

const CartItems = (props) => {
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={props.image} alt="" />
      </div>

      <p className="item-name">{props.title}</p>
      <p className="item-amount">Amount: {props.amount}</p>
      <p className="item-price">£{props.price}</p>
    </div>
  );
};

export default CartItems;

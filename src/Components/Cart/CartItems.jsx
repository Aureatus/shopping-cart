import React from "react";

const CartItems = (props) => {
  return (
    <div className="cart-item">
      <img src="" alt="" />
      <p className="item-name">{props.e}</p>
      <p className="item-amount">1</p>
      <p className="item-price">£2</p>
    </div>
  );
};

export default CartItems;

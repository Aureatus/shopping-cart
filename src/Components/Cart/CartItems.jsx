import React from "react";

import "../../Styles/Cart/CartItems.css";

const CartItems = ({
  image,
  title,
  amount,
  index,
  price,
  changeCartItemAmount,
}) => {
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
        <img src={image} alt="" />
      </div>
      <p className="item-name">{title}</p>
      <div className="amount-container">
        <p className="item-amount">Amount:</p>
        <input
          type="number"
          id="cart-item-amount"
          defaultValue={amount}
          onChange={() => {
            changeCartItemAmount(
              index,
              document
                .querySelectorAll(".cart-item")
                [index].querySelector("#cart-item-amount").value
            );
          }}
        />
      </div>
      <p className="item-price">£{calculatePrice(price, amount)}</p>
    </div>
  );
};

export default CartItems;

import React from "react";
import CartItems from "./CartItems";

import "../../Styles/Cart/Cartpage.css";

const Cartpage = (props) => {
  const cartData = props.cartData;
  const getTotalprice = () => {
    if (cartData.length === 0) {
      return 0;
    } else {
      const itemPriceArray = cartData.map((e) => e.amount * e.price);
      const totalPrice = itemPriceArray.reduce(
        (previousValue, currentValue) => previousValue + currentValue
      );

      return totalPrice;
    }
  };

  return (
    <main aria-label="Cart Section">
      <header className="cart-item-amount">
        {cartData.length} items in your basket.
      </header>
      <section className="cart-items">
        {cartData.map((e, index) => (
          <CartItems
            key={e.id}
            index={index}
            title={e.title}
            image={e.image}
            price={e.price}
            amount={e.amount}
            id={e.id}
          />
        ))}
      </section>
      <section className="checkout">
        <p className="total-cost">Total price: £{getTotalprice()}</p>
        <button>Check Out</button>
      </section>
    </main>
  );
};

export default Cartpage;

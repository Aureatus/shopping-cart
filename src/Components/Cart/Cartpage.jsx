import React from "react";
import CartItems from "./CartItems";

import "../../Styles/Cart/Cartpage.css";

const Cartpage = () => {
  const cartItemArray = ["a", "b", "c", "d", "e"];

  return (
    <main aria-label="Cart Section">
      <header className="cart-item-amount">5 items in your basket.</header>
      <section className="cart-items">
        {cartItemArray.map((e, index) => (
          <CartItems key={index} index={index} e={e} />
        ))}
      </section>
      <section className="checkout">
        <p className="total-cost">Total price: £123</p>
        <button>Check Out</button>
      </section>
    </main>
  );
};

export default Cartpage;

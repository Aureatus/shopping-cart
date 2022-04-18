import React from "react";
import CartItems from "./CartItems";

import "../../Styles/Cart/Cartpage.css";

const Cartpage = (props) => {
  const cartData = props.cartData;

  return (
    <main aria-label="Cart Section">
      <header className="cart-item-amount">5 items in your basket.</header>
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
        <p className="total-cost">Total price: £123</p>
        <button>Check Out</button>
      </section>
    </main>
  );
};

export default Cartpage;

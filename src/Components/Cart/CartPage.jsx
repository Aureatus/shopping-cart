import React from "react";
import CartItems from "./CartItems";

import "../../Styles/Cart/CartPage.css";

const CartPage = (props) => {
  const cartData = props.cartData;
  const getTotalprice = () => {
    if (cartData.length === 0) {
      return 0;
    } else {
      const itemPriceArray = cartData.map((e) => e.amount * e.price);
      let totalPrice = itemPriceArray.reduce(
        (previousValue, currentValue) => previousValue + currentValue
      );
      if (Math.floor(totalPrice) === totalPrice) {
        return totalPrice;
      }

      totalPrice = totalPrice.toFixed(2);

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
            changeCartItemAmount={props.changeCartItemAmount}
          />
        ))}
      </section>
      <section className="checkout">
        <p className="total-cost">
          Total price:<br></br> £{getTotalprice()}
        </p>
        <button>Check Out</button>
      </section>
    </main>
  );
};

export default CartPage;

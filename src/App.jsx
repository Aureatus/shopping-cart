import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Catalogpage from "./Components/Catalog/Catalogpage";
import Cartpage from "./Components/Cart/Cartpage";
import Navbar from "./Components/Navbar/Navbar";

import "./Styles/App.css";
import { useEffect, useState } from "react";

function App() {
  let [shopData, setShopData] = useState(null);
  let [cartData, setCartData] = useState([]);
  let [error, setError] = useState("");

  const changeItemAmount = (index, newAmount) => {
    const newShopElement = shopData[index];
    newShopElement.amount = Number(newAmount);
    const newShopData = shopData;
    newShopData[index] = newShopElement;
    setShopData(newShopData);
  };

  const changeCartItemAmount = (index, newAmount) => {
    if (Number(newAmount) === 0) {
      removeFromCart(cartData[index].id);
      return;
    } else {
      const newCartElement = cartData[index];
      newCartElement.amount = Number(newAmount);
      const newCartData = [...cartData];
      newCartData[index] = newCartElement;
      setCartData(newCartData);
    }
  };
  const addToCart = (index) => {
    if (shopData[index].added === false) {
      const newCartData = cartData.concat(shopData[index]);
      setCartData(newCartData);
      const newShopData = shopData;
      newShopData[index].added = true;
    }
  };

  const removeFromCart = (id) => {
    const newCartData = cartData.filter((item) => item.id !== id);
    const newShopData = shopData.map((x) => {
      if (x.id === id) {
        x.added = false;
      }
      return x;
    });
    setCartData(newCartData);
    setShopData(newShopData);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=12`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        data.forEach((e) => {
          e.added = false;
          e.amount = 1;
          if (Math.floor(e.price) === e.price) {
            return;
          }
          e.price = e.price.toFixed(2);
        });
        setShopData(data);
      })
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route
          path="catalog"
          element={
            <Catalogpage
              shopData={shopData}
              addToCart={addToCart}
              changeItemAmount={changeItemAmount}
              error={error}
            />
          }
        />
        <Route
          path="cart"
          element={
            <Cartpage
              cartData={cartData}
              removeFromCart={removeFromCart}
              changeCartItemAmount={changeCartItemAmount}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

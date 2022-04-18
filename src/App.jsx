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

  const changeItemAmount = (index, newAmount) => {
    const newShopElement = shopData[index];
    newShopElement.amount = Number(newAmount);
    const newShopData = shopData;
    newShopData[index] = newShopElement;
    setShopData(newShopData);
  };

  const addToCart = (index) => {
    console.log(index);
    if (!cartData[index]) {
      const newCartData = cartData.concat(shopData[index]);
      setCartData(newCartData);
    } else {
      const newCartData = cartData;
      cartData.splice(index, 1, shopData[index]);
      setCartData(newCartData);
    }
  };

  const removeFromCart = (id) => {
    const newCartData = cartData.filter((item) => item !== shopData[id]);
    setCartData(newCartData);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=12`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        data.forEach((e) => {
          e.amount = 1;
        });
        setShopData(data);
      });
  }, []);

  useEffect(() => {
    console.log(cartData);
  });
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
            />
          }
        />
        <Route
          path="cart"
          element={
            <Cartpage cartData={cartData} removeFromCart={removeFromCart} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

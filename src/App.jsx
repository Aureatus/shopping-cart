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

  const addToCart = (id) => {
    const newCartData = cartData.concat(shopData[id]);
    setCartData(newCartData);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=12`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => setShopData(data));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route
          path="catalog"
          element={<Catalogpage shopData={shopData} addToCart={addToCart} />}
        />
        <Route path="cart" element={<Cartpage />} />
      </Routes>
    </div>
  );
}

export default App;

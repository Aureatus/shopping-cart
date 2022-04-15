import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Catalogpage from "./Components/Catalog/Catalogpage";
import Cartpage from "./Components/Cart/Cartpage";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="catalog" element={<Catalogpage />} />
        <Route path="cart" element={<Cartpage />} />
      </Routes>
    </div>
  );
}

export default App;

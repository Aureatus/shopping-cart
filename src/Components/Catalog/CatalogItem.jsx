import React from "react";

import "../../Styles/Catalog/CatalogItem.css";

const CatalogItem = (props) => {
  return (
    <div className="item" key={props.index}>
      <img src="" alt="" />
      <p className="itemName">{props.e}</p>
      <form>
        <input type="number" id="itemAmount" defaultValue={1} />
        <button type="submit" id="addToCart">
          Add To Cart
        </button>
      </form>
    </div>
  );
};

export default CatalogItem;

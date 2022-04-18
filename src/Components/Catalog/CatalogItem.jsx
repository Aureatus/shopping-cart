import React from "react";

import "../../Styles/Catalog/CatalogItem.css";

const CatalogItem = (props) => {
  return (
    <div className="item">
      <div className="itemImage">
        <img src={props.image} alt="" />
      </div>
      <p className="itemName">{props.title}</p>
      <h2 className="itemCost">£{props.price}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addToCart(props.id);
        }}
      >
        <input type="number" id="itemAmount" defaultValue={1} />
        <button type="submit" id="addToCart">
          Add To Cart
        </button>
      </form>
    </div>
  );
};

export default CatalogItem;

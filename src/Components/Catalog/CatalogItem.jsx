import React from "react";

import "../../Styles/Catalog/CatalogItem.css";

const CatalogItem = ({
  image,
  title,
  price,
  index,
  addToCart,
  changeItemAmount,
}) => {
  return (
    <div className="item">
      <div className="itemImage">
        <img src={image} alt="" />
      </div>
      <p className="itemName">{title}</p>
      <h2 className="itemCost">£{price}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addToCart(index);
        }}
      >
        <input
          type="number"
          id="itemAmount"
          defaultValue={1}
          min="1"
          onChange={() => {
            changeItemAmount(
              index,
              document
                .querySelectorAll(".item")
                [index].querySelector("#itemAmount").value
            );
          }}
        />
        <button type="submit" id="addToCart">
          Add To Cart
        </button>
      </form>
    </div>
  );
};

export default CatalogItem;

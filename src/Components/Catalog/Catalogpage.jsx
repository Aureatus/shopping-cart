import React from "react";

import CatalogItem from "./CatalogItem";

import "../../Styles/Catalog/Catalogpage.css";

const Catalogpage = (props) => {
  const shopData = props.shopData;

  if (shopData === null) {
    return (
      <main aria-label="Catalog Section">
        <h1>Catalog</h1>
        <h1>Items loading... Please wait.</h1>
      </main>
    );
  } else if (shopData !== null) {
    return (
      <main aria-label="Catalog Section">
        <h1>Catalog</h1>
        <section className="items">
          {shopData.map((e, index) => {
            if (e.added === false) {
              return (
                <CatalogItem
                  key={e.id}
                  index={index}
                  title={e.title}
                  image={e.image}
                  price={e.price}
                  id={e.id}
                  addToCart={props.addToCart}
                  changeItemAmount={props.changeItemAmount}
                />
              );
            } else if (e.added === true) {
              return (
                <div className="item" key={e.id}>
                  <div className="itemImage">
                    <img src={e.image} alt="" />
                  </div>
                  <p className="itemName">{e.title}</p>
                  <h2 className="itemCost">£{e.price}</h2>
                  <h1>Item In Cart.</h1>
                </div>
              );
            }
            return true;
          })}
        </section>
      </main>
    );
  }
};

export default Catalogpage;

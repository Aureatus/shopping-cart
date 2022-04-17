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
          {shopData.map((e, index) => (
            <CatalogItem
              key={e.id}
              index={index}
              title={e.title}
              image={e.image}
              price={e.price}
            />
          ))}
        </section>
      </main>
    );
  }
};

export default Catalogpage;

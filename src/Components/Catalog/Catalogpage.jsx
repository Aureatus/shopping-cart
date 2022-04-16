import React from "react";

import CatalogItem from "./CatalogItem";

import "../../Styles/Catalog/Catalogpage.css";

const Catalogpage = () => {
  const itemArray = ["a", "b", "c", "d", "e"];
  return (
    <main aria-label="Catalog Section">
      <h1>Catalog</h1>
      <section className="items">
        {itemArray.map((e, index) => (
          <CatalogItem key={index} index={index} e={e} />
        ))}
      </section>
    </main>
  );
};

export default Catalogpage;

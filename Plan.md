#  Shopping Cart Plan

## Brief Plan
App will have header with Homepage, catalog and cart.
Each header element will route to a respective component.
Header will be rendered irrespective of the current route.

A user will be able to add an item to their cart from the catalog using an Add to cart button,

## Src File structure
  ```
Src
│   index.js
│   App.js    
└───Components
│   └───Navbar
│       │   Navbar.jsx
│       │   ButtonHomepage.jsx
│       │   ButtonCatalog.jsx
│       │   ButtonCart.jsx
│   └───Homepage
│       │   Homepage.jsx
│   └───Catalog
│       │   Catalogpage.jsx
│       │   CatalogItem.jsx
│   └───Cart
        │   Cartpage.jsx 
        │   CartItem.jsx 
└───Styles
    │   index.css
    │   App.css
  ```

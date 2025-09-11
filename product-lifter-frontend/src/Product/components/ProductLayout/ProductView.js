import { useState, react } from "react";
import ProductList from "./ProductView/ProductList";
import ManualFetch from "./ProductView/ManualFetch";

const ProductView = () => {
  var showManualFetch = true;
  return (
    <>
      <ProductList></ProductList>
      {showManualFetch ? <ManualFetch></ManualFetch> : null}
    </>
  );
};

export default ProductView;

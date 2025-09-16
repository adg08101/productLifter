import { useState } from "react";
import ProductList from "./ProductView/ProductList";
import ManualFetch from "./ProductView/ManualFetch";

const ProductView = () => {
  var showManualFetch = false;
  const [load, setLoad] = useState(true);

  const onClickFunc = () => {
    setLoad(!load);
  };

  return (
    <>
      <ProductList load={load}></ProductList>
      {showManualFetch ? (
        <ManualFetch
          onClickFunc={onClickFunc}
          messageOne="fetch_now"
          messageTwo="done"
        ></ManualFetch>
      ) : null}
    </>
  );
};

export default ProductView;

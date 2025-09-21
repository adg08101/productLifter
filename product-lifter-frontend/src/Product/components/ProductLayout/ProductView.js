import { useState } from "react";
import ProductList from "./ProductView/ProductList";
import CustomButton from "./ProductView/CustomButton";

const ProductView = () => {
  var showManualFetch = false;
  const [load, setLoad] = useState(true);

  const onClickFunc = () => {
    setLoad(!load);
  };

  return (
    <>
      <ProductList></ProductList>
      {showManualFetch ? (
        <CustomButton
          onClickFunc={onClickFunc}
          messageOne="fetch_now"
          messageTwo="done"
        ></CustomButton>
      ) : null}
    </>
  );
};

export default ProductView;

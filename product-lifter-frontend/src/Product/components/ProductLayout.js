import React from "react";
import { Section } from "react-bulma-components";
import ProductHeader from "./ProductLayout/ProductHeader";
import ProductView from "./ProductLayout/ProductView";

const ProductLayout = () => {
  return (
    <>
      <ProductHeader title="Products List" />
      <Section>
        <ProductView />
      </Section>
    </>
  );
};

export default ProductLayout;

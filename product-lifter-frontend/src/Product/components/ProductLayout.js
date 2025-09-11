import React from "react";
import { Section, Box, Tag } from "react-bulma-components";
import ProductHeader from "./ProductLayout/ProductHeader";
import AddButton from "./ProductLayout/AddButton";
import ProductView from "./ProductLayout/ProductView";
import ShareStatus from "./ShareStatus"

const ProductLayout = () => {
  return (
    <>
      <ProductHeader title="Products List" />
      <Section>
        <AddButton text="Add button" />
        <ProductView />
      </Section>
      <Section>
        <ShareStatus></ShareStatus>
      </Section>
    </>
  );
};

export default ProductLayout;

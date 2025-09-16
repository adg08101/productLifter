import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import ManualFetch from "./ManualFetch";
import AddButton from "../AddButton";
import Card from "./Card";
import { Columns, Pagination, Section, Box } from "react-bulma-components";
import Paginator from "./Paginator";
import { getProducts } from "../../../../libs/axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [productCounter, setProductCounter] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const response = await getProducts();
      if (response.status === 200) {
        setProducts(response.data);
        setProductCounter(Object.keys(response.data).length);
        setIsLoading(false);
      }
    }

    loadProducts();
  }, [productCounter, refresh]);

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (products.length === 0) {
    return (
      <>
        <Box>No products are found try adding new ones</Box>

        <ManualFetch
          onClickFunc={() => {
            setRefresh(!refresh);
          }}
          messageOne="refresh_now"
          messageTwo="refresh_now"
        ></ManualFetch>
        <AddButton text="Add button" />
      </>
    );
  }

  return (
    <>
      <Columns>
        <Card props={products[0]}></Card>
        <Card props={products[0]}></Card>
        <Card props={products[0]}></Card>
        <Card props={products[0]}></Card>
      </Columns>

      <ManualFetch
        onClickFunc={() => {
          setRefresh(!refresh);
        }}
        messageOne="refresh_now"
        messageTwo="refresh_now"
      ></ManualFetch>
      <AddButton text="Add button" />
      <Section>
        <Paginator current={1} total={productCounter}></Paginator>
      </Section>
    </>
  );
};

export default ProductList;

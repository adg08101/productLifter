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
  const [currentPage, setCurrentPage] = useState(0);
  const productPaginatorLimit = 4;

  useEffect(() => {
    async function loadProducts() {
      const response = await getProducts();
      if (response.status === 200) {
        const auxArray = response.data;
        const fragmentSize = productPaginatorLimit;
        const splittedArray = [];

        for (let i = 0; i < auxArray.length; i += fragmentSize) {
          splittedArray.push(auxArray.slice(i, i + fragmentSize));
        }

        setProducts(splittedArray);
        setProductCounter(Object.keys(response.data).length);
        setIsLoading(false);
      }
    }

    loadProducts();
  }, [refresh]);

  const footer = function footer() {
    return (
      <>
        <ManualFetch
          onClickFunc={() => {
            setRefresh(!refresh);
          }}
          messageOne="refresh_now"
          messageTwo="refresh_now"
        ></ManualFetch>
        <AddButton
          text="Add button"
          onClickFunc={() => {
            setCurrentPage(1);
          }}
        />
      </>
    );
  };

  const paginator = function paginator() {
    return (
      <>
        <Section>
          <Paginator current={1} total={productCounter}></Paginator>
        </Section>
      </>
    );
  };

  function getProductsByIndex() {
    const productsChunk = products[currentPage];
    const productsChunkArray = [];
    productsChunk.forEach((p) => {
      productsChunkArray.push(p);
    });
    productsChunkArray.map((p) => {
      return <Card props={p}></Card>;
    });
  }

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (products.length === 0) {
    return (
      <>
        <Box>No products are found try adding new ones</Box>
        {footer()}
      </>
    );
  } else {
    return (
      <>
        <Columns>{getProductsByIndex}</Columns>
        {footer()}
        {paginator()}
      </>
    );
  }
};

export default ProductList;

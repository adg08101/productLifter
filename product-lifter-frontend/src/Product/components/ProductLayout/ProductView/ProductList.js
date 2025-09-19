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
  const [productsPage, setProductsPage] = useState([]);
  const [productCounter, setProductCounter] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const productPaginatorLimit = 4;
  const styleCols = 12;

  useEffect(() => {
    async function loadProducts() {
      const response = await getProducts();
      if (response.status === 200) {
        setProducts(response.data);
        setProductsPage(
          products.slice(currentPage, currentPage + productPaginatorLimit)
        );
        setProductCounter(Object.keys(response.data).length);
        setIsLoading(false);
      }
    }

    if (currentPage > 0) {
      setCanGoBack(false);
    } else {
      setCanGoBack(true);
    }

    if (currentPage + productPaginatorLimit + 1 > productCounter) {
      setCanGoNext(true);
    } else {
      setCanGoNext(false);
    }

    loadProducts();
  }, [refresh, currentPage, productCounter]);

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
        <AddButton text="Add button" />
      </>
    );
  };

  const paginator = function paginator() {
    const pages = productCounter / productPaginatorLimit;
    return (
      <>
        <Section className="is-flex columns is-centered">
          <Paginator
            disablePrev={canGoBack}
            prevFunction={() => {
              setCurrentPage(currentPage - productPaginatorLimit);
            }}
            disableNext={canGoNext}
            nextFunction={() => {
              setCurrentPage(currentPage + productPaginatorLimit);
            }}
            pages={pages}
          ></Paginator>
        </Section>
      </>
    );
  };

  const getProductsPage = productsPage.map((product) => {
    return (
      <Card size={styleCols / productPaginatorLimit} props={product}></Card>
    );
  });

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
        <Columns>{getProductsPage}</Columns>
        {footer()}
        {paginator()}
      </>
    );
  }
};

export default ProductList;

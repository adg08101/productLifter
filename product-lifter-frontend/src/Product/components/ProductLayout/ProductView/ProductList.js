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
  const [currentOffset, setCurrentOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPaginatorLimit, setProductPaginatorLimit] = useState(5);
  const styleCols = 12;

  useEffect(() => {
    async function loadProducts() {
      const response = await getProducts();
      if (response.status === 200) {
        setProducts(response.data);
        setProductsPage(
          products.slice(currentOffset, currentOffset + productPaginatorLimit)
        );
        setProductCounter(Object.keys(response.data).length);
        setIsLoading(false);
      }
    }

    if (currentOffset > 0) {
      setCanGoBack(false);
    } else {
      setCanGoBack(true);
    }

    if (currentOffset + productPaginatorLimit + 1 > productCounter) {
      setCanGoNext(true);
    } else {
      setCanGoNext(false);
    }

    loadProducts();
  }, [refresh, currentOffset, productCounter, productPaginatorLimit]);

  useEffect(() => {
    setCurrentOffset(productPaginatorLimit * (currentPage - 1));
  }, [currentPage]);

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
              setCurrentOffset(currentOffset - productPaginatorLimit);
              setCurrentPage(currentPage - 1);
            }}
            disableNext={canGoNext}
            nextFunction={() => {
              setCurrentOffset(currentOffset + productPaginatorLimit);
              setCurrentPage(currentPage + 1);
            }}
            goToPageFunction={(event) => {
              setCurrentPage(parseInt(event.target.id));
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

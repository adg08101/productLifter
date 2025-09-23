import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import CustomButton from "./CustomButton";
import Card from "./Card";
import { Columns, Pagination, Section, Box } from "react-bulma-components";
import Paginator from "../../Paginator";
import { getProducts } from "../../../../libs/axios";
import ProductListFooter from "./components/ProductListFooter";
import ProductModal from "./components/ProductModal";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [productsPage, setProductsPage] = useState([]);
  const [productCounter, setProductCounter] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [canGoBack, setCanGoBack] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPaginatorLimit, setProductPaginatorLimit] = useState(4);
  const styleCols = 12;
  const pages = productCounter / productPaginatorLimit;

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

  const getProductsPage = productsPage.map((product) => {
    return (
      <Card
        key={product.sku}
        size={styleCols / productPaginatorLimit}
        props={product}
      ></Card>
    );
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (products.length === 0) {
    return (
      <>
        <Box>No products are found try adding new ones</Box>
        {
          <ProductListFooter
            onClickFunc={() => setRefresh(!refresh)}
            addProductFunction={() => setShowModal(true)}
          ></ProductListFooter>
        }
      </>
    );
  } else {
    return (
      <>
        <Columns>{getProductsPage}</Columns>
        {
          <ProductListFooter
            onClickFunc={() => setRefresh(!refresh)}
            addProductFunction={() => setShowModal(true)}
          ></ProductListFooter>
        }
        <Section className="is-flex columns is-centered">
          <Section>
            {productPaginatorLimit > 1 ? (
              <CustomButton
                onClickFunc={() => {
                  setProductPaginatorLimit(productPaginatorLimit - 1);
                }}
                messageOne="-"
                messageTwo="-"
              ></CustomButton>
            ) : null}{" "}
            {productPaginatorLimit < 6 ? (
              <CustomButton
                onClickFunc={() => {
                  setProductPaginatorLimit(productPaginatorLimit + 1);
                }}
                messageOne="+"
                messageTwo="+"
              ></CustomButton>
            ) : null}
          </Section>
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
            currentPage={currentPage}
          ></Paginator>
        </Section>

        <ProductModal
          closeFunction={() => setShowModal(false)}
          show={showModal}
        ></ProductModal>
      </>
    );
  }
};

export default ProductList;

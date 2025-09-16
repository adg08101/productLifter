import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import ManualFetch from "./ManualFetch";
import axios from "axios";

async function getProducts() {
  try {
    const response = await axios({
      url: `http://localhost:8080/v1/getAllProducts`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

const ProductList = ({ load = true }) => {
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
        if (productCounter === 0) {
          console.log("No products");
        }
        setIsLoading(false);
      }
    }

    loadProducts();
  }, [productCounter, refresh]);

  return (
    <>
      {isLoading ? <Loading></Loading> : null}
      <ManualFetch
        onClickFunc={() => {
          setRefresh(!refresh);
        }}
        messageOne="refresh_now"
        messageTwo="refresh_now"
      ></ManualFetch>
    </>
  );
};

export default ProductList;

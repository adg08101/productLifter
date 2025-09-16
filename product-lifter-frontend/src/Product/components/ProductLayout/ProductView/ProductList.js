import React, { useState, useEffect } from "react";
import Loading from "./Loading";
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

  useEffect(() => {
    async function loadProducts() {
      const response = await getProducts();
      if (response.status === 200) {
        setProducts(response.data);
        setProductCounter(Object.keys(response.data).length);
      }
    }

    loadProducts();
  }, [productCounter]);

  console.log(products);

  return load ? <Loading></Loading> : null;
};

export default ProductList;

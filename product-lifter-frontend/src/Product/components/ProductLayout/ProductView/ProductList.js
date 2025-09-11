import React, { useState, useEffect } from "react";
import Loading from "./Loading";

const ProductList = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(!setIsLoading);
    }, 5000);
  });
  return isLoading ? <Loading></Loading> : null;
};

export default ProductList;

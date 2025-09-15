import React, { useState, useEffect } from "react";
import Loading from "./Loading";

const ProductList = ({ load = true }) => {
  return load ? <Loading></Loading> : null;
};

export default ProductList;

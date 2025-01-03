import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProduct } from "../redux/actions/productActions";
const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setProduct(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("Products",products);
  return (
    <div className="ui grid container" >
      <ProductComponent />
    </div>
  );
};

export default ProductListing;

import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const cart = useSelector((state) => state.auth.currentUser.cart);
  const fetchProducts = async () => {
    await axios
      .get("/api/v1/products")
      .then((serverRes) => {
        setProducts(serverRes.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  }, [cart]);

  return products;
};

export default useProducts;

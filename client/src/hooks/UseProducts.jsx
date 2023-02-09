import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const cart = useSelector((state) => state.auth.currentUser.cart);
  const issue = useSelector((state) => state.ui.issue);
  const fetchProducts = async () => {
    await axios
      .get(`/api/v1/products?issue=${issue}`)
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

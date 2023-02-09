import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const cart = useSelector((state) => state.auth.currentUser.cart);
  const issueToShow = useSelector((state) => state.ui.issueToShow);
  const fetchProducts = async () => {
    await axios
      .get(`/api/v1/products?issue=${issueToShow}`)
      .then((serverRes) => {
        setProducts(serverRes.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  }, [cart, issueToShow]);

  return products;
};

export default useProducts;

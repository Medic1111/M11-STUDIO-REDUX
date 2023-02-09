import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../features/ui-slice";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.auth.currentUser.cart);
  const { issueToShow, showSpoiler, showPrevious } = useSelector(
    (state) => state.ui
  );

  const fetchProducts = async () => {
    dispatch(uiActions.setIsLoading(true));
    await axios
      .get(`/api/v1/products?issue=${issueToShow}`)
      .then((serverRes) => {
        setProducts(serverRes.data);
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(uiActions.setIsLoading(false)));
  };

  useEffect(() => {
    fetchProducts();
  }, [cart, issueToShow, showSpoiler, showPrevious]);

  return products;
};

export default useProducts;

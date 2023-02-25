import ArtDetail from "../../pages/ArtDetail/ArtDetail";
import Auth from "../../components/Auth/Auth";
import Checkout from "../../components/Checkout/Checkout";
import Cart from "../../components/Cart/Cart";
import Portal from "../../portal/Portal";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import OtherExpo from "../../components/OtherExpo/OtherExpo";
import Account from "../../components/Account/Account";
import { useValidateQuery } from "../../features/api-slice";
import { authActions } from "../../features/auth-slice";
import { uiActions } from "../../features/ui-slice";

const Modal = () => {
  const uiSelector = useSelector((state) => state.ui);
  // const dispatch = useDispatch();
  // const { data, error } = useValidateQuery();

  // useEffect(() => {
  //   if (error) {
  //     dispatch(authActions.logout());
  //     dispatch(uiActions.closeModal());
  //     return () => {};
  //   }
  //   if (data) dispatch(authActions.auth_in(data.user));
  //   return () => {};
  // }, [data, error, dispatch]);

  return (
    <Portal>
      {uiSelector.showArtDetail && <ArtDetail />}
      {uiSelector.showAuth && <Auth />}
      {uiSelector.showCart && <Cart />}
      {uiSelector.showCheckout && <Checkout />}
      {uiSelector.showOtherExpo && <OtherExpo />}
      {uiSelector.showAccount && <Account />}
    </Portal>
  );
};

export default Modal;

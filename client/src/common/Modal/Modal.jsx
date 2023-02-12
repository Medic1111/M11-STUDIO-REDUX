import ArtDetail from "../../pages/ArtDetail/ArtDetail";
import Auth from "../../components/Auth/Auth";
import Checkout from "../../components/Checkout/Checkout";
import Cart from "../../components/Cart/Cart";
import Portal from "../../portal/Portal";
import { useSelector } from "react-redux";
import OtherExpo from "../../components/OtherExpo/OtherExpo";
import Account from "../../components/Account/Account";

const Modal = () => {
  const uiSelector = useSelector((state) => state.ui);
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

import ArtDetail from "../../pages/ArtDetail/ArtDetail";
import Auth from "../../components/Auth/Auth";
// import Checkout from "../../components/Checkout/Checkout";
import Cart from "../../components/Cart/Cart";
import Portal from "../../portal/Portal";
import { useSelector } from "react-redux";

const Modal = () => {
  const uiSelector = useSelector((state) => state.ui);
  return (
    <Portal>
      {uiSelector.showArtDetail && <ArtDetail />}
      {uiSelector.showAuth && <Auth />}
      {uiSelector.showCart && <Cart />}
      {/* {uiMgr.state.showCheckout && <Checkout />}  */}
    </Portal>
  );
};

export default Modal;

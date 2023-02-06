import ArtDetail from "../../pages/ArtDetail/ArtDetail";
import Auth from "../../components/Auth/Auth";
// import Cart from "../../components/Cart/Cart";
// import Checkout from "../../components/Checkout/Checkout";
import Portal from "../../portal/Portal";
import { useSelector } from "react-redux";

const Modal = () => {
  const uiSelector = useSelector((state) => state.ui);
  return (
    <Portal>
      {uiSelector.showArtDetail && <ArtDetail />}
      {uiSelector.showAuth && <Auth />}
      {/* {uiMgr.state.showCart && <Cart />}
      {uiMgr.state.showCheckout && <Checkout />} */}
    </Portal>
  );
};

export default Modal;

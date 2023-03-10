import AnimBanner from "../../common/AnimBanner/AnimBanner";
import CartPlaceholder from "../CartPlaceholder/CartPlaceholder";
import CartTotal from "../CartTotal/CartTotal";
import CartReturn from "../CartReturn/CartReturn";
import CartList from "../CartList/CartList";
import CartWrapper from "../CartWrapper/CartWrapper";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.auth.currentUser.cart);

  return (
    <>
      <AnimBanner />
      <CartWrapper>
        <CartList cart={cart} />
        {cart.length <= 0 && <CartPlaceholder />}
        <CartTotal cart={cart} />
        <CartReturn />
      </CartWrapper>
    </>
  );
};

export default Cart;

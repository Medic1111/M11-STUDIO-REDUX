import CartItem from "../CartItem/CartItem";

const CartList = ({ cart }) => {
  return (
    <>
      {cart.map((obj, index) => {
        return (
          <CartItem
            key={`CART_ITEM${index}`}
            obj={obj.item}
            quantity={obj.quantity}
          />
        );
      })}
    </>
  );
};

export default CartList;

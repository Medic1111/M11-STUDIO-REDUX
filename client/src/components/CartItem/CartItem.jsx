import classes from "./CartItem.module.css";
import CartCrud from "../CartCrud/CartCrud";

const CartItem = ({ obj, quantity }) => {
  return (
    <div className={classes.card}>
      <img alt="wall/street art" className={classes.img} src={obj.url} />
      <div className={classes.txtBox}>
        <p className={classes.pTitle}>{obj.title}</p>
        <p className={classes.pDes}>{obj.description}</p>
        <p className={classes.pArtist}>- {obj.artist}</p>
        <p className={classes.pPrice}>${obj.price}</p>
        <CartCrud objId={obj.id} quantity={quantity} objStock={obj.stock} />
      </div>
    </div>
  );
};

export default CartItem;

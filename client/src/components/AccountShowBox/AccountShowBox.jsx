import classes from "./AccountShowBox.module.css";
import Placeholder from "../../assets/gal2.jpg";

const AccountShowBox = () => {
  return (
    <div className={classes.showDiv}>
      <img className={classes.img} src={Placeholder} />
    </div>
  );
};

export default AccountShowBox;

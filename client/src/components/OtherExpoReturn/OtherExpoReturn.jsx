import classes from "./OtherExpoReturn.module.css";
import { Slide } from "react-awesome-reveal";
import CartReturn from "../../components/CartReturn/CartReturn";

const OtherExpoReturn = () => {
  return (
    <div className={classes.txtBox2}>
      <Slide direction="right" cascade>
        <CartReturn />
      </Slide>
    </div>
  );
};
export default OtherExpoReturn;

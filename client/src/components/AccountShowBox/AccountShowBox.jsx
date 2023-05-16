import classes from "./AccountShowBox.module.css";
import Placeholder from "../../assets/gal2.jpg";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import AccountDel from "../AccountDel/AccountDel";
import AccountPass from "../AccountPass/AccountPass";
import AccountSupport from "../AccountSupport/AccountSupport";

const AccountShowBox = ({ socket }) => {
  const uiSelector = useSelector((state) => state.ui);
  const userId = useSelector((state) => state.auth.currentUser.id);
  return (
    <div className={classes.showDiv}>
      {!uiSelector.showDeleteAccount &&
        !uiSelector.showChangePassword &&
        !uiSelector.showSupport && (
          <img className={classes.img} src={Placeholder} />
        )}
      {uiSelector.showDeleteAccount && (
        <Fade>
          <AccountDel userId={userId} />
        </Fade>
      )}
      {uiSelector.showChangePassword && (
        <Fade>
          <AccountPass userId={userId} />
        </Fade>
      )}
      {uiSelector.showSupport && <AccountSupport socket={socket} />}
    </div>
  );
};

export default AccountShowBox;

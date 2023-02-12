import classes from "../AccountDel/AccountDel.module.css";
import { useChangePasswordMutation } from "../../features/api-slice";
import { uiActions } from "../../features/ui-slice";
import { authActions } from "../../features/auth-slice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const AccountPass = ({ userId }) => {
  const [changePass, { data, error }] = useChangePasswordMutation();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useDispatch();

  const changePassHandler = async (e) => {
    e.preventDefault();
    const args = {
      userId,
      currentPassword,
      newPassword,
    };
    const request = await changePass(args);
    if (request && request.error) return;
    dispatch(uiActions.closeModal());
    setCurrentPassword("");
    setNewPassword("");
    return dispatch(authActions.logout());
  };

  return (
    <article className={classes.article}>
      <form className={classes.form} onSubmit={changePassHandler}>
        <p className={classes.title}>CHANGE PASSWORD</p>
        <input
          className={classes.input}
          type={"password"}
          placeholder={"Password"}
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <input
          className={classes.input}
          type={"password"}
          placeholder={"New Password"}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input className={classes.submit} type={"submit"} />
        {error && <p className={classes.err}>{error.data.message}</p>}
      </form>
    </article>
  );
};

export default AccountPass;

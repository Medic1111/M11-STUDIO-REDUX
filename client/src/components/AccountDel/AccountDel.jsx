import classes from "./AccountDel.module.css";
import { useDeleteMutation } from "../../features/api-slice";
import { uiActions } from "../../features/ui-slice";
import { authActions } from "../../features/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AccountDel = ({ userId }) => {
  const [deleteUser, { data, error }] = useDeleteMutation();
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const deleteHandler = async (e) => {
    e.preventDefault();
    const args = {
      userId,
      password,
    };
    const request = await deleteUser(args);
    if (request && request.error) return;
    dispatch(uiActions.closeModal());
    setPassword("");
    return dispatch(authActions.logout());
  };

  return (
    <article className={classes.article}>
      <form className={classes.form} onSubmit={deleteHandler}>
        <p className={classes.title}>DELETE ACCOUNT</p>
        <input
          className={classes.input}
          type={"password"}
          placeholder={"Password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className={classes.submit} type={"submit"} />
        {error && <p className={classes.err}>{error.data.message}</p>}
      </form>
    </article>
  );
};

export default AccountDel;

import classes from "./AuthForm.module.css";
import CloseModal from "../../common/CloseModal/CloseModal";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../features/auth-slice";
import { useState } from "react";
import { authApi } from "../../features/auth-slice";
import { Slide } from "react-awesome-reveal";

const AuthForm = () => {
  const dispatch = useDispatch();
  const authSelector = useSelector((state) => state.auth);

  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const inputChangeHandler = (e) => {
    setErrMsg("");
    setErr(false);
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(authActions.setFormData(formData));
    dispatch(authApi(setErr, setErrMsg));
  };
  return (
    <Slide className={classes.form} direction="up">
      <form onSubmit={submitHandler} className={classes.form}>
        <p className={classes.title}>
          {authSelector.isLoggin ? "Login" : "Register"}
        </p>
        {authSelector.isLoggin || (
          <input
            className={classes.input}
            type={"email"}
            placeholder={"Email address"}
            value={formData.email}
            name="email"
            onChange={inputChangeHandler}
          />
        )}
        <input
          className={classes.input}
          type={"username"}
          placeholder={"Username"}
          value={formData.username}
          name="username"
          onChange={inputChangeHandler}
        />
        <input
          className={classes.input}
          type={"password"}
          placeholder={"Password"}
          value={formData.password}
          name="password"
          onChange={inputChangeHandler}
        />
        {authSelector.isLoggin || (
          <input
            className={classes.input}
            type={"password"}
            placeholder={"Confirm Password"}
            value={formData.passwordConfirm}
            name="passwordConfirm"
            onChange={inputChangeHandler}
          />
        )}
        <div className={classes.btnBox}>
          <CloseModal text={"BACK"} className={classes.back} />
          <input className={classes.submit} type={"submit"} />
        </div>
        <p
          className={classes.p}
          onClick={() =>
            dispatch(authActions.setIsLoggin(!authSelector.isLoggin))
          }
        >
          {authSelector.isLoggin
            ? "Dont have an account? Register"
            : "Already have an account? Login"}
        </p>
        {err && <p className={classes.err}>{errMsg}</p>}
      </form>
    </Slide>
  );
};

export default AuthForm;

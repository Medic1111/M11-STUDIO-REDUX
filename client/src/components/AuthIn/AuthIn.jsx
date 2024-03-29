import classes from "../AuthForm/AuthForm.module.css";
import CloseModal from "../../common/CloseModal/CloseModal";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../features/auth-slice";
import { uiActions } from "../../features/ui-slice";
import { useState } from "react";
import {
  useLoginMutation,
  useRegisterMutation,
} from "../../features/api-slice";

const AuthIn = ({ setShowForgot }) => {
  const dispatch = useDispatch();
  const authSelector = useSelector((state) => state.auth);

  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();

  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const [formData, setFormData] = useState({
    username: "medic1111",
    email: "",
    password: "111111",
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
    dispatch(uiActions.setIsLoading(true));

    let url = authSelector.isLoggin
      ? `/api/v1/auth/login`
      : `/api/v1/auth/register`;

    let user =
      url == "/api/v1/auth/login"
        ? await login(formData)
        : await register(formData);

    if (!user.error) {
      dispatch(authActions.auth_in(user.data.user));
      dispatch(uiActions.closeModal());
      dispatch(uiActions.setIsLoading(false));
    } else {
      setErr(true);
      setErrMsg(user.error.data.message);
      dispatch(uiActions.setIsLoading(false));
    }
  };
  return (
    <form onSubmit={(e) => submitHandler(e)} className={classes.form}>
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
          minLength={5}
          maxLength={35}
          required
        />
      )}
      <input
        className={classes.input}
        type={"username"}
        placeholder={"Username"}
        value={formData.username}
        name="username"
        onChange={inputChangeHandler}
        minLength={5}
        maxLength={15}
        required
      />
      <input
        className={classes.input}
        type={"password"}
        placeholder={"Password"}
        value={formData.password}
        name="password"
        onChange={inputChangeHandler}
        minLength={6}
        maxLength={99}
        required
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
        <input value={"SUBMIT"} className={classes.submit} type={"submit"} />
        <CloseModal text={"BACK"} className={classes.back} />
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
      {authSelector.isLoggin && (
        <button onClick={() => setShowForgot(true)} className={classes.submit2}>
          Forgot password
        </button>
      )}
    </form>
  );
};

export default AuthIn;

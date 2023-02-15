import classes from "../AuthForm/AuthForm.module.css";
import { useState } from "react";
import { useResetPasswordMutation } from "../../features/api-slice";

const AuthUpdate = ({ setShowForgot, setShowPassConfirm }) => {
  const [request, { error, isError }] = useResetPasswordMutation();
  const [formData, setFormData] = useState({
    temp_password: "",
    newPassword: "",
    newPasswordConfirm: "",
    username: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleRequest = async (e) => {
    e.preventDefault();
    const apiCall = await request(formData);
    apiCall.data &&
      !apiCall.error &&
      setShowForgot(false) &&
      setShowPassConfirm(false);
  };

  return (
    <>
      <p className={classes.instruction}>PLEASE CHECK YOUR EMAIL AND PROCEED</p>
      <input
        className={classes.input}
        type={"text"}
        placeholder={"Username"}
        value={formData.username}
        name="username"
        onChange={onInputChange}
      />
      <input
        className={classes.input}
        type={"text"}
        placeholder={"Recovery Code"}
        value={formData.temp_password}
        name="temp_password"
        onChange={onInputChange}
      />
      <input
        className={classes.input}
        type={"password"}
        placeholder={"New Password"}
        value={formData.newPassword}
        name="newPassword"
        onChange={onInputChange}
      />
      <input
        className={classes.input}
        type={"password"}
        placeholder={"Confirm New Password"}
        value={formData.newPasswordConfirm}
        name="newPasswordConfirm"
        onChange={onInputChange}
      />
      <input
        className={classes.submit2}
        type={"submit"}
        value="UPDATE PASSWORD"
        onClick={handleRequest}
      />
      {isError && <p className={classes.err}>{error.data.message}</p>}
    </>
  );
};

export default AuthUpdate;

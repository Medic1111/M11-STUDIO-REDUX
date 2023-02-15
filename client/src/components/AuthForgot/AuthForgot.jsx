import classes from "../AuthForm/AuthForm.module.css";
import { useState } from "react";
import { useForgotPasswordMutation } from "../../features/api-slice";

const AuthForgot = ({ setShowPassConfirm }) => {
  const [request, { error, isError }] = useForgotPasswordMutation();
  const [email, setEmail] = useState("");

  const handleRequest = async (e) => {
    e.preventDefault();
    const apiCall = await request(email);
    apiCall.data && !apiCall.error && setShowPassConfirm(true);
  };

  return (
    <>
      <input
        placeholder="Registered email address"
        className={classes.input}
        type={"email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={classes.submit2}
        type={"submit"}
        value="SEND ME MY RECOVERY CODE"
        onClick={handleRequest}
      />
      {isError && <p className={classes.err}>{error.data.message}</p>}
    </>
  );
};

export default AuthForgot;

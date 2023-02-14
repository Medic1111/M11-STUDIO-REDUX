import classes from "./AuthForm.module.css";
import { useState } from "react";
import { Slide } from "react-awesome-reveal";
import AuthUpdate from "../AuthUpdate/AuthUpdate";
import AuthForgot from "../AuthForgot/AuthForgot";
import AuthIn from "../AuthIn/AuthIn";

const AuthForm = () => {
  const [showForgot, setShowForgot] = useState(false);
  const [showConfirm, setShowPassConfirm] = useState(false);

  return (
    <Slide className={classes.form} direction="up">
      {!showForgot ? (
        <AuthIn setShowForgot={setShowForgot} />
      ) : (
        <form className={classes.form}>
          <p className={classes.title}>Forgot Password</p>
          {!showConfirm ? (
            <AuthForgot setShowPassConfirm={setShowPassConfirm} />
          ) : (
            <AuthUpdate
              setShowPassConfirm={setShowPassConfirm}
              setShowForgot={setShowForgot}
            />
          )}
        </form>
      )}
    </Slide>
  );
};

export default AuthForm;

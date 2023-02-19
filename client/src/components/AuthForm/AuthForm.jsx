import classes from "./AuthForm.module.css";
import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import AuthUpdate from "../AuthUpdate/AuthUpdate";
import AuthForgot from "../AuthForgot/AuthForgot";
import AuthIn from "../AuthIn/AuthIn";
import { useMediaQuery } from "react-responsive";

const AuthForm = () => {
  const [showForgot, setShowForgot] = useState(false);
  const [showConfirm, setShowPassConfirm] = useState(false);

  const notMobileView = useMediaQuery({ query: "(max-width:700px)" });

  const Wrapper = ({ children }) => {
    if (notMobileView) {
      return <React.Fragment>{children}</React.Fragment>;
    }
    return (
      <Slide className={classes.form} direction="up">
        {children}
      </Slide>
    );
  };

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default AuthForm;

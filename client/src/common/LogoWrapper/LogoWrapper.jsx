import classes from "./LogoWrapper.module.css";

const LogoWrapper = ({ children }) => {
  return <div className={classes.logoWrapper}>{children}</div>;
};

export default LogoWrapper;

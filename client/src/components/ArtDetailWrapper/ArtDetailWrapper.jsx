import classes from "./ArtDetailWrapper.module.css";

const ArtDetailWrapper = ({ children }) => {
  return <section className={classes.section}>{children}</section>;
};

export default ArtDetailWrapper;

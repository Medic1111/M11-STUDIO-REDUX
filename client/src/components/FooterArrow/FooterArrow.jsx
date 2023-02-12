import classes from "./FooterArrow.module.css";

const FooterArrow = () => {
  // PASS FUNCTIONALITY
  return (
    <span className={`${classes.arrow} material-symbols-outlined`}>
      expand_less
    </span>
  );
};

export default FooterArrow;

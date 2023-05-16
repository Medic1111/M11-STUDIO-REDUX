import classes from "./FooterArrow.module.css";

const FooterArrow = () => {
  return (
    <a href="#hero" className={`${classes.arrow} material-symbols-outlined`}>
      expand_less
    </a>
  );
};

export default FooterArrow;

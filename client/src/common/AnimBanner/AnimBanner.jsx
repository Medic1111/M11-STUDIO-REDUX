import classes from "./AnimBanner.module.css";

const AnimBanner = ({ orange, black, id }) => {
  return (
    <article id={id ? id : null} className={classes.article}>
      <p className={classes.m}>
        m<span className={classes.span1}>{orange}</span>
      </p>
      <p className={classes.eleven}>
        <span className={classes.span2}>{black}</span>
        11
      </p>
    </article>
  );
};

export default AnimBanner;

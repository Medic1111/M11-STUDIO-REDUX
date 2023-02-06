import classes from "./ArtDetailOne.module.css";

const ArtDetailOne = ({ title, id }) => {
  return (
    <div className={classes.colOne}>
      <p className={classes.title}>{title}</p>
      <p className={classes.price}>#{id}</p>
    </div>
  );
};

export default ArtDetailOne;

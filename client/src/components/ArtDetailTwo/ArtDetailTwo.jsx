import classes from "./ArtDetailTwo.module.css";

const ArtDetailTwo = ({ view, url }) => {
  return (
    <div className={view === "portrait" ? classes.colTwo : classes.colTwoAlt}>
      <img alt="street/wall art" className={classes.img} src={url} />
    </div>
  );
};

export default ArtDetailTwo;

import classes from "./OtherExpoItem.module.css";
import { Slide } from "react-awesome-reveal";
import { useMediaQuery } from "react-responsive";

const OtherExpoItem = ({ index, url }) => {
  const scrollHorizontal = useMediaQuery({ query: "(min-width:1000px)" });

  return (
    <li className={classes.li}>
      <Slide
        direction={
          scrollHorizontal
            ? index % 2
              ? "up"
              : "down"
            : index % 2
            ? "left"
            : "right"
        }
      >
        <img className={classes.img} src={url} />
      </Slide>
    </li>
  );
};

export default OtherExpoItem;

import classes from "./OtherExpoItem.module.css";
import { Slide } from "react-awesome-reveal";

const OtherExpoItem = ({ index, url }) => {
  return (
    <li className={classes.li}>
      <Slide direction={index % 2 ? "up" : "down"}>
        <img className={classes.img} src={url} />
      </Slide>
    </li>
  );
};

export default OtherExpoItem;

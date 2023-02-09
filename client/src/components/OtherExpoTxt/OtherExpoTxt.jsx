import classes from "./OtherExpoTxt.module.css";
import { useSelector } from "react-redux";

const OtherExpoTxt = () => {
  const { showPrevious, showSpoiler } = useSelector((state) => state.ui);

  return (
    <div className={classes.txtBox}>
      {showPrevious && (
        <>
          <p className={classes.txt}>MISSED</p>
          <p className={classes.txt2}>CHANCE</p>
        </>
      )}
      {showSpoiler && (
        <>
          <p className={classes.txt}>SPOILER</p>
          <p className={classes.txt2}>ALERT</p>
        </>
      )}
    </div>
  );
};

export default OtherExpoTxt;

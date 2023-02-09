import classes from "./ArtItemImg.module.css";
import { Slide } from "react-awesome-reveal";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../features/ui-slice";
import { useMediaQuery } from "react-responsive";

const ArtItemImg = ({ index, obj }) => {
  const dispatch = useDispatch();
  const randomOrder = useMediaQuery({ query: "(min-width:1000px)" });
  const { issue, issueToShow } = useSelector((state) => state.ui);

  return (
    <Slide
      style={!randomOrder ? { order: 0 } : { order: index % 2 ? 1 : 0 }}
      className={classes.slide}
      direction={index % 2 ? "right" : "left"}
    >
      <img
        alt="street/wall art"
        onClick={() => {
          if (issue !== issueToShow) return;
          dispatch(uiActions.setSelectedArt(obj));
          dispatch(uiActions.setShowArtDetail(true));
        }}
        className={
          randomOrder
            ? obj.view === "landscape"
              ? classes.img2
              : classes.img1
            : classes.mobileImg
        }
        src={obj.url}
      />
    </Slide>
  );
};

export default ArtItemImg;

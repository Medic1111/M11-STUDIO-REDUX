import classes from "./ArtItemImg.module.css";
import { Slide } from "react-awesome-reveal";
import { useDispatch } from "react-redux";
import { uiActions } from "../../features/ui-slice";
import { useMediaQuery } from "react-responsive";

const ArtItemImg = ({ index, obj }) => {
  const dispatch = useDispatch();
  const randomOrder = useMediaQuery({ query: "(min-width:1000px)" });

  return (
    <Slide
      style={!randomOrder ? { order: 0 } : { order: index % 2 ? 1 : 0 }}
      className={classes.slide}
      direction={index % 2 ? "right" : "left"}
    >
      <img
        alt="street/wall art"
        onClick={() => {
          dispatch(uiActions.setSelectedArt(obj));
          dispatch(uiActions.setShowArtDetail(true));
        }}
        // className={index % 2 ? classes.img2 : classes.img1}
        className={
          randomOrder
            ? index % 2
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

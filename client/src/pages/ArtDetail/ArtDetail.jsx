import { useSelector } from "react-redux";
import HorizontalScroll from "react-scroll-horizontal";
import ArtDetailWrapper from "../../components/ArtDetailWrapper/ArtDetailWrapper";
import ArtDetailOne from "../../components/ArtDetailOne/ArtDetailOne";
import ArtDetailTwo from "../../components/ArtDetailTwo/ArtDetailTwo";
import ArtDetailThree from "../../components/ArtDetailThree/ArtDetailThree";
import { useMediaQuery } from "react-responsive";
import Scroll from "../../common/Scroll/Scroll";

const ArtDetail = () => {
  const uiSelector = useSelector((state) => state.ui);

  return (
    // <HorizontalScroll reverseScroll={true}>
    <Scroll>
      <ArtDetailWrapper>
        <ArtDetailOne
          title={uiSelector.selectedArt.title}
          id={uiSelector.selectedArt.id}
        />
        <ArtDetailTwo
          view={uiSelector.selectedArt.view}
          url={uiSelector.selectedArt.url}
        />
        <ArtDetailThree />
      </ArtDetailWrapper>
    </Scroll>
    // </HorizontalScroll>
  );
};

export default ArtDetail;

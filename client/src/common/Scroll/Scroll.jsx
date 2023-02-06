import HorizontalScroll from "react-scroll-horizontal";
import { useMediaQuery } from "react-responsive";
import React from "react";

const Scroll = ({ children }) => {
  const scrollHorizontal = useMediaQuery({ query: "(min-width:1000px)" });

  return (
    <React.Fragment>
      {scrollHorizontal ? (
        <HorizontalScroll reverseScroll={true}>{children}</HorizontalScroll>
      ) : (
        <>{children}</>
      )}
    </React.Fragment>
  );
};

export default Scroll;

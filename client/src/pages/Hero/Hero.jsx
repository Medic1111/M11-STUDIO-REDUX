import AnimBanner from "../../common/AnimBanner/AnimBanner";
import Logo from "../../common/Logo/Logo";
import React from "react";
import LogoWrapper from "../../common/LogoWrapper/LogoWrapper";
import { useSelector } from "react-redux";

const Hero = () => {
  const issue = useSelector((state) => state.ui.issue);
  return (
    <React.Fragment>
      <AnimBanner
        orange={`- ${issue} - expo - is - on -`}
        black={`- absolute - fire - don't - miss - out -`}
        id={"hero"}
      />
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
    </React.Fragment>
  );
};

export default Hero;

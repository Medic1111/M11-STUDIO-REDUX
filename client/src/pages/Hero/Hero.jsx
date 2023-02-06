import AnimBanner from "../../common/AnimBanner/AnimBanner";
import Logo from "../../common/Logo/Logo";
import React from "react";
import LogoWrapper from "../../common/LogoWrapper/LogoWrapper";

const Hero = () => {
  return (
    <React.Fragment>
      <AnimBanner
        orange={`- february - expo - is - on -`}
        black={`- absolute - fire - don't - miss - out -`}
      />
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
    </React.Fragment>
  );
};

export default Hero;

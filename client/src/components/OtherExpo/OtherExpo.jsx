import classes from "./OtherExpo.module.css";
import HorizontalScroll from "react-scroll-horizontal";
import OtherExpoTxt from "../OtherExpoTxt/OtherExpoTxt";
import OtherExpoReturn from "../OtherExpoReturn/OtherExpoReturn";
import OtherExpoList from "../OtherExpoList/OtherExpoList";
import Scroll from "../../common/Scroll/Scroll";
const OtherExpo = () => {
  return (
    <Scroll>
      <section className={classes.section}>
        <OtherExpoTxt />
        <OtherExpoList />
        <OtherExpoReturn />
      </section>
    </Scroll>
  );
};

export default OtherExpo;

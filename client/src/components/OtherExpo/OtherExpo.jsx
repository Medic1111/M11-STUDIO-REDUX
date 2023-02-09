import classes from "./OtherExpo.module.css";
import HorizontalScroll from "react-scroll-horizontal";
import OtherExpoTxt from "../OtherExpoTxt/OtherExpoTxt";
import OtherExpoReturn from "../OtherExpoReturn/OtherExpoReturn";
import OtherExpoList from "../OtherExpoList/OtherExpoList";

const OtherExpo = () => {
  return (
    <HorizontalScroll reverseScroll>
      <section className={classes.section}>
        <OtherExpoTxt />
        <OtherExpoList />
        <OtherExpoReturn />
      </section>
    </HorizontalScroll>
  );
};

export default OtherExpo;

import classes from "./AboutContent.module.css";
import GalOne from "../../assets/gal1.jpg";
import React from "react";

const AboutContent = () => {
  return (
    <section id="us" className={classes.section}>
      <img alt="art gallery" className={classes.img} src={GalOne} />
      <div className={classes.col}>
        <div className={classes.txtBox}>
          <div className={classes.boxOne}>
            <strong className={classes.strong}>Where</strong>
            <p className={classes.p}>1111 Ocean Dr. Miami Beach, FL</p>
            <p className={classes.p}>305-111-6363</p>
          </div>
          <div className={classes.boxOne}>
            <strong className={classes.strong}>
              {new Date().toLocaleString("default", { month: "long" })}
            </strong>
            <p className={classes.p}>Caçique has taught...</p>
            <p className={classes.p}>6 ltd. edition</p>
          </div>
          <div className={classes.boxOne}>
            <strong className={classes.strong}>Insurance</strong>
            <p className={classes.p}>We are backed up by strong_art_helmet</p>
            <p className={classes.p}>
              Offering a 5 year warranty on all issues
            </p>
          </div>
        </div>
        <div className={classes.popUp}>
          <strong className={classes.popUpTxt2}>MONTHLY-EXPOS</strong>
          <p className={classes.des}>
            Our online street art gallery shop showcases the work of some of the
            most talented street artists from around the world. From
            eye-catching murals to thought-provoking pieces, our collection has
            something for everyone. Each piece in our shop is carefully curated
            and chosen for its unique style, quality, and message. Whether
            you're a long-time street art aficionado or just discovering the
            genre, our shop is the perfect place to explore, find inspiration,
            and purchase amazing works of art to add to your own collection.
          </p>
        </div>
        <div className={classes.detailBox}>
          <p className={classes.detail}>limited</p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AboutContent);

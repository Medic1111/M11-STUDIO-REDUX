import classes from "./ArtDetailThree.module.css";
import ArtItemBtn from "../ArtItemBtn/ArtItemBtn";
import CloseModal from "../../common/CloseModal/CloseModal";
import { useSelector } from "react-redux";
import { useState } from "react";

const ArtDetailThree = () => {
  const uiSelector = useSelector((state) => state.ui);
  const [stockCount, setStockCount] = useState(uiSelector.selectedArt.stock);
  return (
    <div className={classes.colThree}>
      <div className={classes.txtBox}>
        <div className={classes.boxOne}>
          <strong className={classes.strong}>Who</strong>
          <p className={classes.p}>{uiSelector.selectedArt.artist}</p>
        </div>
        <div className={classes.boxOne}>
          <strong className={classes.strong}>Location</strong>
          <p className={classes.p}>{uiSelector.selectedArt.location}</p>
          <p className={classes.p}>9 ltd. edition</p>
        </div>
        <div className={classes.boxOne}>
          <strong className={classes.strong}>Insurance</strong>
          <p className={classes.p}>We are backed up by strong_art_helmet</p>
          <p className={classes.p}>Offering a 5 year warranty on all issues</p>
        </div>
      </div>
      <p className={classes.des}>
        {uiSelector.selectedArt.description} <br />
        <span className={classes.stock}>
          {" "}
          stock:{" "}
          {uiSelector.selectedArt.stock <= 0 ? "out of stock" : stockCount}{" "}
        </span>
      </p>

      <div className={classes.btnBox}>
        <CloseModal className={classes.back} text={"BACK"} />
        <ArtItemBtn
          content={uiSelector.selectedArt.price}
          index={uiSelector.selectedArt.identity}
          id={uiSelector.selectedArt.id}
          setStockCount={setStockCount}
          stockCount={stockCount}
        />{" "}
      </div>
    </div>
  );
};

export default ArtDetailThree;

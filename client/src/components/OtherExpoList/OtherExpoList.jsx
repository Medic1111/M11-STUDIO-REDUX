import classes from "./OtherExpoList.module.css";
import useProducts from "../../hooks/UseProducts";
import OtherExpoItem from "../OtherExpoItem/OtherExpoItem";

const OtherExpoList = () => {
  const products = useProducts();

  return (
    <ul className={classes.ul}>
      {products.map((obj, index) => {
        return (
          <OtherExpoItem
            key={`ITEM_TO_SHOW_${index}`}
            index={index}
            url={obj.url}
          />
        );
      })}
    </ul>
  );
};

export default OtherExpoList;

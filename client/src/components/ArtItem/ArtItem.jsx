import { Slide } from "react-awesome-reveal";
import ArtItemBtn from "../ArtItemBtn/ArtItemBtn";
import ArtItemImg from "../ArtItemImg/ArtItemImg";
import ArtItemDes from "../ArtItemDes/ArtItemDes";
import ArtItemWrapper from "../ArtItemWrapper/ArtItemWrapper";
import { useState } from "react";
import { useSelector } from "react-redux";

const ArtItem = ({ obj, index }) => {
  const uiSelector = useSelector((state) => state.ui);
  const [stockCount, setStockCount] = useState(uiSelector.selectedArt.stock);
  const { issue, issueToShow } = useSelector((state) => state.ui);

  return (
    <ArtItemWrapper>
      <ArtItemImg index={index} obj={obj} />
      <Slide direction={index % 2 ? "left" : "right"}>
        <ArtItemDes description={obj.description} index={index} />
        {issue !== issueToShow || (
          <ArtItemBtn
            content={obj.price}
            index={index}
            itemId={obj.id}
            setStockCount={setStockCount}
            stock={stockCount}
          />
        )}
      </Slide>
    </ArtItemWrapper>
  );
};

export default ArtItem;

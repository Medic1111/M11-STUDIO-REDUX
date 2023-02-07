import { Slide } from "react-awesome-reveal";
import ArtItemBtn from "../ArtItemBtn/ArtItemBtn";
import ArtItemImg from "../ArtItemImg/ArtItemImg";
import ArtItemDes from "../ArtItemDes/ArtItemDes";
import ArtItemWrapper from "../ArtItemWrapper/ArtItemWrapper";
import { useState } from "react";

const ArtItem = ({ obj, index }) => {
  const [stockCount, setStockCount] = useState(obj.stockCount);
  return (
    <ArtItemWrapper>
      <ArtItemImg index={index} obj={obj} />
      <Slide direction={index % 2 ? "left" : "right"}>
        <ArtItemDes description={obj.description} index={index} />
        <ArtItemBtn
          content={obj.price}
          index={index}
          id={obj.id}
          setStockCount={setStockCount}
        />
      </Slide>
    </ArtItemWrapper>
  );
};

export default ArtItem;

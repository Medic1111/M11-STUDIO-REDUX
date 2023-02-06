import Header from "../../common/Header/Header";
import ArtList from "../../components/ArtList/ArtList";
import ShowroomWrapper from "../../components/ShowroomWrapper/ShowroomWrapper";

const Showroom = () => {
  return (
    <ShowroomWrapper>
      <Header id="expo" title={"expo"} />
      <ArtList />
    </ShowroomWrapper>
  );
};

export default Showroom;

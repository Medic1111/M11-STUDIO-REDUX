import Header from "../../common/Header/Header";
import ArtList from "../../components/ArtList/ArtList";
import IssueNav from "../../common/IssueNav/IssueNav";
import ShowroomWrapper from "../../components/ShowroomWrapper/ShowroomWrapper";

const Showroom = () => {
  return (
    <ShowroomWrapper>
      <Header id="expo" title={"expo"} />
      <IssueNav />
      <ArtList />
    </ShowroomWrapper>
  );
};

export default Showroom;

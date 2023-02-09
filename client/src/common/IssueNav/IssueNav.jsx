import classes from "./IssueNav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../features/ui-slice";
import { months } from "../../assets/months";

const IssueNav = () => {
  const dispatch = useDispatch();
  const issue = useSelector((state) => state.ui.issue);

  return (
    <nav className={classes.nav}>
      <ul className={classes.ul}>
        <li
          className={classes.li}
          onClick={() => {
            dispatch(uiActions.setShowOtherExpo(true));
            dispatch(uiActions.setShowPrevious(true));
            dispatch(
              uiActions.setIssueToShow(months[months.indexOf(issue) - 1])
            );
          }}
        >
          previous-expo
        </li>
        <li
          className={classes.li}
          onClick={() => {
            dispatch(uiActions.setShowOtherExpo(true));
            dispatch(uiActions.setShowSpoiler(true));
            dispatch(
              uiActions.setIssueToShow(months[months.indexOf(issue) + 1])
            );
          }}
        >
          spoiler-expo
        </li>
      </ul>
    </nav>
  );
};

export default IssueNav;

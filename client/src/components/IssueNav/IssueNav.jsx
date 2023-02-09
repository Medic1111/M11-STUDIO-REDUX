import { useDispatch, useSelector } from "react-redux";
import classes from "./IssueNav.module.css";
import { uiActions } from "../../features/ui-slice";

const IssueNav = () => {
  const dispatch = useDispatch();
  const issue = useSelector((state) => state.ui.issue);

  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  return (
    <nav className={classes.nav}>
      <ul className={classes.ul}>
        <li
          className={classes.li}
          onClick={() =>
            dispatch(
              uiActions.setIssueToShow(months[months.indexOf(issue) - 1])
            )
          }
        >
          previous
        </li>
        <li
          className={classes.li}
          onClick={() =>
            dispatch(uiActions.setIssueToShow(months[months.indexOf(issue)]))
          }
        >
          current
        </li>
        <li
          className={classes.li}
          onClick={() =>
            dispatch(
              uiActions.setIssueToShow(months[months.indexOf(issue) + 1])
            )
          }
        >
          spoiler
        </li>
      </ul>
    </nav>
  );
};

export default IssueNav;

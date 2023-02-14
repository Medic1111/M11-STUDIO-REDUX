import React, { useEffect } from "react";
import SideNav from "./common/SideNav/SideNav";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import Spinner from "./common/Spinner/Spinner";
import Modal from "./common/Modal/Modal";
import Showroom from "./pages/Showroom/Showroom";
import { useDispatch, useSelector } from "react-redux";
import { useValidateQuery } from "./features/api-slice";
import { authActions } from "./features/auth-slice";
import { uiActions } from "./features/ui-slice";

function App() {
  const dispatch = useDispatch();
  const uiSelector = useSelector((state) => state.ui);
  const { data, error } = useValidateQuery();

  useEffect(() => {
    if (error) {
      console.log("IM HERE");
      dispatch(authActions.logout());
      dispatch(uiActions.closeModal());
      return () => {};
    }
    if (data) dispatch(authActions.auth_in(data.user));
    return () => {};
  }, [data, error, dispatch]);

  return (
    <React.Fragment>
      {uiSelector.showModal && <Modal />}
      {uiSelector.isLoading && <Spinner />}
      <SideNav />
      <Hero />
      <Showroom />
      <About />
      <Footer />
    </React.Fragment>
  );
}

export default App;

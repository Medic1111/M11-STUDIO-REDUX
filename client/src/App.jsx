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

function App() {
  const uiSelector = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const { data, error } = useValidateQuery();

  useEffect(() => {
    if (error) return dispatch(authActions.logout());
    data && dispatch(authActions.auth_in(data.user));
  }, [data]);

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

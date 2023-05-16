import React from "react";
import SideNav from "./common/SideNav/SideNav";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import Spinner from "./common/Spinner/Spinner";
import Modal from "./common/Modal/Modal";
import Showroom from "./pages/Showroom/Showroom";
import { useSelector } from "react-redux";
import useAutoLogout from "./hooks/UseAutoLogout";

function App() {
  const uiSelector = useSelector((state) => state.ui);
  useAutoLogout();

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

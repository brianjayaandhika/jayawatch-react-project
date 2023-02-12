import React from "react";
import Header from "../Header/Header";
import Intro from "../Intro/Intro";

import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      {/* Intro Section */}
      <div className="landing-bg ">
        <Header display="none" />
        <Intro />
      </div>
      {/* End of Intro Section */}
    </>
  );
};

export default LandingPage;

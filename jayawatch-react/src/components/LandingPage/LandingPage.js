import React from "react";
import Header from "../Header/Header";
import Intro from "../Intro/Intro";
import Trending from "../Movie/Movie";
import Footer from "../Footer/Footer";

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
      {/* Trending Movie Section - Hardcoded */}
      {/* <div id="trending-section" className="pt-3 pb-5" style={{ backgroundColor: "black" }}>
        <Trending />
      </div> */}
      {/* End of Trending Movie Section */}
      {/* Footer Section */}

      {/* End of Footer Section */}
    </>
  );
};

export default LandingPage;

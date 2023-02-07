import React from "react";
import Header from "../Header/Header";
import Intro from "../Intro/Intro";
import Trending from "../Trending/Trending";
import Footer from "../Footer/Footer";

const LandingPage = () => {
  return (
    <>
      {/* Intro Section */}
      <div className="landing-bg ">
        <Header />
        <Intro />
      </div>
      {/* End of Intro Section */}
      {/* Trending Movie Section - Hardcoded */}
      <div id="trending-section" className="pt-3 pb-5" style={{ backgroundColor: "black" }}>
        <Trending />
      </div>
      {/* End of Trending Movie Section */}
      {/* Footer Section */}
      <div className="footer-section">
        <Footer />
      </div>
      {/* End of Footer Section */}
    </>
  );
};

export default LandingPage;

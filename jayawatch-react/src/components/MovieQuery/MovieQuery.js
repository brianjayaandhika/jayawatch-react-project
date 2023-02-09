import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Trending from "../Trending/Trending";

const MovieQuery = () => {
  return (
    <>
      <div style={{ background: "black" }}>
        <Header />
        {/* Footer Section */}
        <div className="footer-section login-footer pt-5">
          <Footer />
        </div>
        {/* End of Footer Section */}
      </div>
    </>
  );
};

export default MovieQuery;

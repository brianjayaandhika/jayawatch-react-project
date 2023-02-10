import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Movie from "../Movie/Movie";

const MoviePage = () => {
  return (
    <>
      <div style={{ background: "black" }}>
        <Header />
        <Movie />
        {/* Footer Section */}
        <div className="footer-section login-footer pt-5">
          <Footer />
        </div>
        {/* End of Footer Section */}
      </div>
    </>
  );
};

export default MoviePage;

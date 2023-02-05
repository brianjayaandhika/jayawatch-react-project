import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Trending from "./components/Trending/Trending";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div>
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
      </div>
    </>
  );
}

export default App;

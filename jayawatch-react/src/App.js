import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Trending from "./components/Trending/Trending";
import "./App.css";

function App() {
  return (
    <>
      <div style={{ height: "2500px" }}>
        {/* Intro Section */}
        <div className="landing-bg">
          <Header />
          <Intro />
        </div>
        {/* End of Intro Section */}
        {/* Trending Movie Section - Hardcoded */}
        <div className="pt-4" style={{ backgroundColor: "black", height: "200vh" }}>
          <Trending />
        </div>
        {/* End of Trending Movie Section */}
      </div>
    </>
  );
}

export default App;

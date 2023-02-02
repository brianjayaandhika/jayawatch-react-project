import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Recommend from "./components/Recommend/Recommend";
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
        {/* Recommended Movie Section */}
        <div className="pt-4" style={{ backgroundColor: "black", height: "100vh" }}>
          <Recommend />
        </div>
        {/* End of Recommended Movie Section */}
      </div>
    </>
  );
}

export default App;

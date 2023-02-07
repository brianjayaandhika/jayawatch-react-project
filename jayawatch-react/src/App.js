import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";

// Intinya akan ada 3 page, Landing Page, Login Page, MovieList Page

function App() {
  return (
    <>
      <div>
        {/* <LandingPage /> */}
        <LoginPage />
      </div>
    </>
  );
}

export default App;

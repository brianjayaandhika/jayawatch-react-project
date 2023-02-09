import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";
import MovieQuery from "./components/MovieQuery/MovieQuery";

// Intinya akan ada 3 page, Landing Page, Login Page, MovieList Page

function App() {
  return (
    <>
      <div>
        {/* <LandingPage /> */}
        {/* <LoginPage /> */}
        <MovieQuery />
      </div>
    </>
  );
}

export default App;

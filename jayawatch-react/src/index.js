import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";
import MoviePage from "./components/MoviePage/MoviePage";
import Header from "./components/Header/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <p>Page Not Found</p>,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <p>Page Not Found</p>,
  },
  {
    path: "/movie",
    element: <MoviePage />,
    errorElement: <p>Page Not Found</p>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

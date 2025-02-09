import { createBrowserRouter, RouteObject } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import MoreDetails from "./pages/moreDetailPage/MoreDetails";
import Layout from "./components/layout/Layout";
import LoginPage from "./components/login/LoginPage";
import SignupPage from "./components/signup/SignupPage";
import LoginSignup from "./pages/loginSignup/LoginSignup";



const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/auth", // Parent route
    element: <LoginSignup/>, // Wraps child routes with the Layout component
    children: [
      {
        path: "login", // Renders LoginPage at "/loginSignup/login"
        element: <LoginPage />,
      },
      {
        path: "signup", // Renders SignupPage at "/loginSignup/signup"
        element: <SignupPage />,
      },
    ],
    
  },
  {
    path: "/info",
    element: <MoreDetails />,
  },
];

export const router = createBrowserRouter(routes);







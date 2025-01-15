import { createBrowserRouter, RouteObject } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Layout from "./components/layout/Layout";
import SignupPage from "./pages/loginSignup/SignupPage";
import LoginPage from "./pages/loginSignup/LoginPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/loginSignup", // Parent route
    element: <Layout>{null}</Layout>, // Wraps child routes with the Layout component
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
];

export const router = createBrowserRouter(routes);

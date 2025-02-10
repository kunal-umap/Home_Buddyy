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
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      }
    ]
  },
  {
    path: "/auth",
    element: <LoginSignup/>, 
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

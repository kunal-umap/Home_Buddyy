import { createBrowserRouter, RouteObject } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import MoreDetails from "./pages/moreDetailPage/MoreDetails";
import Layout from "./components/layout/Layout";
import LoginPage from "./components/login/LoginPage";
import SignupPage from "./components/signup/SignupPage";
import LoginSignup from "./pages/loginSignup/LoginSignup";
import SellerPage from "./pages/sellerPage/SellerPage";
import PropertyPage from "./pages/propertyPage/PropertyPage";
import BuyPage from "./pages/buyPage/BuyPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/sellerPage",
        element: <SellerPage />,
      },
      {
        path: "/propertyPage",
        element: <PropertyPage />,
      },
      {
        path: "/buyPage",
        element: <BuyPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <LoginSignup />,
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
  {
    path: "/info",
    element: <MoreDetails />,
  },
];

export const router = createBrowserRouter(routes);

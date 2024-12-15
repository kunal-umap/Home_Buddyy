import { createBrowserRouter, RouteObject } from "react-router-dom";
import HomePage from "./pages/home/HomePage";


const routes: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />,
    }
];

export const router = createBrowserRouter(routes);
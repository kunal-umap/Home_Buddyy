import { createBrowserRouter, Outlet, RouteObject } from "react-router-dom";
import HomePage from "./pages/home/HomePage";


const routes: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/auth',
        element: <div>About
            <Outlet />
        </div>,
        children: [
            {
                path: 'login',
                element: <div>1</div>
            },
            {
                path: '2',
                element: <div>2</div>
            }
        ]
    }
    
];

export const router = createBrowserRouter(routes);



/* 

    Folder (LoginSignupPage.tsx & css -> pages) -> layout1 -> outlet tag
    components -> loginForm -> LoginFrom.tsx, LoginFrom.module.css 
    components -> signupForm -> SignupFrom.tsx, SignupFrom.module.css

    Pages -> Folder - MoreDetailsPage[ 
    
    -> MoreDetailsPage.tsx, MoreDetailsPage.module.css,
    ->  MoreDetailsForm -> [MoreDetailsForm.tsx, MoreDetailsForm.module.css]
    ]


    Font sizes, 3,4 Colours , Spacing 

*/

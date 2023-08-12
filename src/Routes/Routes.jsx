import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";

import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [

            {
                path: "/",
                element: <Login></Login>
            },
            {
                path: "singUp",
                element: <SingUp></SingUp>
            },
        ]
    }
]);
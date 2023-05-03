/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AboutUs from "../pages/AboutUs/AboutUs";
import Blog from "../pages/Blog/Blog";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, 
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'about',
                element: <AboutUs></AboutUs>
            },
            {
              path:'*',
              element:<Error></Error>
            }
        ]
    }
])
export default router;
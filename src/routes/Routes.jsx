/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter } from "react-router-dom";
import ChefsLayout from "../layouts/chefsLayout";
import LoginLayout from "../layouts/LoginLayout";
import Main from "../layouts/Main";
import AboutUs from "../pages/AboutUs/AboutUs";
import Blog from "../pages/Blog/Blog";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";
import ChefsDetails from "../pages/ChefsDetails/ChefsDetails";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Terms from "../pages/Terms/Terms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/chefs')
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
                path: '*',
                element: <Error></Error>
            }
        ]
    },
    {
        path: 'chefs/',
        element: <ChefsLayout></ChefsLayout>,
        children: [
            {
                path: ':id',
                element: <ChefRecipes></ChefRecipes>,
                loader: ({params}) => fetch(`http://localhost:5000/recipes/${params.id}`)
            },
            
           
        ]
    }
])
export default router;
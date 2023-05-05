/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter, Navigate } from "react-router-dom";
import ChefsLayout from "../layouts/chefsLayout";
import Main from "../layouts/Main";
import AboutUs from "../pages/AboutUs/AboutUs";
import Blog from "../pages/Blog/Blog";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";
import ContactUs from "../pages/ContactUs/ContactUs";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Terms from "../pages/Terms/Terms";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
   
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
               
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/terms',
                element: <Terms></Terms>
            }
            
        ]
    },
    {
        path: 'chefs/',
        element: <ChefsLayout></ChefsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
                loader: ({params}) => fetch(`https://the-chef-server-sharikajahanaunto.vercel.app/recipes/${params.id}`)
            }
           
        ]
    }
])
export default router;
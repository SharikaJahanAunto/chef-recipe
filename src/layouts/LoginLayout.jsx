import React from 'react';
import { Outlet } from 'react-router-dom';
import ChefsDetails from '../pages/ChefsDetails/ChefsDetails';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';
import MainContent from '../pages/Shared/MainContent/MainContent';

const LoginLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;
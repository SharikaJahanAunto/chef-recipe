
import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';
import MainContent from '../pages/Shared/MainContent/MainContent';

const Main = () => {
    return (
        <div>
            <Header></Header>
            
            <Outlet></Outlet>
           
            <Footer></Footer>
        </div>
    );
};

export default Main;

import React from 'react';

import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';
import MainContent from '../pages/Shared/MainContent/MainContent';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <MainContent></MainContent>
            <Footer></Footer>
        </div>
    );
};

export default Main;
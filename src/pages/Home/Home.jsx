import React from 'react';
import Banner from '../Banner/Banner';
import ChefsDetails from '../ChefsDetails/ChefsDetails';
import MainContent from '../Shared/MainContent/MainContent';

const Home = () => {
    return (
        <div>
            <MainContent></MainContent>
            <ChefsDetails></ChefsDetails>
           <Banner></Banner>
        </div>
    );
};

export default Home;
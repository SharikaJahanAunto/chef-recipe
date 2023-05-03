
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container className='bg-info'>
                <h2 className='text-center'>Welcome to Bangladeshi Cuisines</h2>
                <p className='text-center'>Bangladeshi cuisine is a combination of flavors, spices, and cooking techniques influenced by the countries geography, history, and cultural diversity. Bangladesh is a land of fertile river deltas, which means that rice, fish, and lentils are staple foods in Bangladeshi cuisine. The use of aromatic spices, such as cumin, coriander, ginger, and turmeric, is common in many Bangladeshi dishes.</p> <br />
                 <p className='text-center'>Want to explore more and there recipes?</p>
            
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;
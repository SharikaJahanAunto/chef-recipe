import React from 'react';
import { Container } from 'react-bootstrap';
import './MainContent.css'
import fish from '../../../assets/fish.jpg'

const MainContent = () => {
    return (
        <Container className='d-flex flex-column justify-content-center align-items-center text-center py-5'>
            <div className='mb-3'>
                <img src={fish} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div className='text-center'>
                <h2 className='mb-4'>Welcome to Bangladeshi Cuisines</h2>
                <p>Bangladeshi cuisine is a combination of flavors, spices, and cooking techniques influenced by the countrys geography, history, and cultural diversity. Bangladesh is a land of fertile river deltas, which means that rice, fish, and lentils are staple foods in Bangladeshi cuisine. The use of aromatic spices, such as cumin, coriander, ginger, and turmeric, is common in many Bangladeshi dishes.</p>
                <p className='mt-4 mb-0'>Want to explore more and their recipes?</p>
            </div>
        </Container>
    );
};

export default MainContent;

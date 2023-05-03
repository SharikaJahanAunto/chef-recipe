import React from 'react';
import { Container } from 'react-bootstrap';
import './MainContent.css'
import fish from '../../../assets/fish.jpg'

const MainContent = () => {
    return (
        <Container className=' d-flex space'>
            <div className='container'>
                <img src={fish} alt="" />
            </div>
            <div className='flex-grow-1 ms-3'>
            <h2 className='text-center '>Welcome to Bangladeshi Cuisines</h2>
            <p className='text-center mb-0'>Bangladeshi cuisine is a combination of flavors, spices, and cooking techniques influenced by the countries geography, history, and cultural diversity. Bangladesh is a land of fertile river deltas, which means that rice, fish, and lentils are staple foods in Bangladeshi cuisine. The use of aromatic spices, such as cumin, coriander, ginger, and turmeric, is common in many Bangladeshi dishes.</p> <br />
            <p className='text-center'>Want to explore more and there recipes?</p>
            </div>
            
        </Container>
    );
};

export default MainContent;
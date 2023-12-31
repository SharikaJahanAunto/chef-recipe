import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import './CardDetails.css'

const ChefsDetails = () => {
    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch('https://the-chef-server-sharikajahanaunto.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])

    const cardStyle = {
        margin: '40px', // setting the margin on all sides of the card
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // adding a box shadow for some depth
        
    };
     
    return (
        <div>
            <h4 className='text-center'>Most Popular and Brilliant Chefs of Bangladesh</h4>
            <Row>
                {chefs.map(chef => (
                    <Col md={4} key={chef._id}>
                        <Card style={cardStyle}>
                            <LazyLoad height={300}>
                                <Card.Img style={{ height: '300px', width: '100%' }} variant="top" src={chef.picture} />
                            </LazyLoad>
                            <Card.Body>
                                <Card.Title>{chef.name}</Card.Title>
                                <Card.Text>
                                    {chef.yearsOfExperience} years of experience<br />
                                    {chef.numberOfRecipes} recipes<br />
                                    {chef.likes} likes
                                </Card.Text>
                                <Link to={`/chefs/${chef._id}`} className="btn btn-primary">View Recipes</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ChefsDetails;

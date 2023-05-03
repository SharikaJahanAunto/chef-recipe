import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CardDetails.css'

const ChefsDetails = () => {
    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/chefs')
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
                {
                    chefs.map(chef => (
                        <Col md={4} key={chef._id}>
                            <Card style={cardStyle}>
                                <Card.Img style={{height: '300px'}} variant="top" src={chef.picture} />
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
                    ))
                }
            </Row>
        </div>
    );
};

export default ChefsDetails;

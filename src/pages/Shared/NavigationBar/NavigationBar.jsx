import React from 'react';

import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="#deets">
                                <h2 className='text-danger'>BD Food</h2>
                            </Nav.Link>
                        </Nav>
                        <Nav className="mx-auto">

                            <Link to='/category/0'>Home</Link>

                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">
                                <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            </Nav.Link>


                            <Button variant="secondary">Logout</Button>
                            <Link to='/login'>
                                <Button variant="secondary">Login</Button>
                            </Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;
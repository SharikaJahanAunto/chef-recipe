import React, { useContext } from 'react';

import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const NavigationBar = () => {
    const { user } = useContext(AuthContext)
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
                            <Link className='me-3' to="/">Home</Link>
                            <Link className='me-3' to='blog'>Blog</Link>
                            <Link className='me-3' to='about'>About Us</Link>
                        </Nav>
                        <Nav>
                            {user && <Nav.Link href="#deets">
                                <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            </Nav.Link>}
                            {user ? <Button variant="secondary">Logout</Button> :
                                <Link to='/login'>
                                    <Button variant="secondary">Login</Button>
                                </Link>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;
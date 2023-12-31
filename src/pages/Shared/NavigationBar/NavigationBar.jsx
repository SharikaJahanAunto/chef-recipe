import React, { useContext } from 'react';

import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import './NavigationBar.css'

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user?.email);
    const handleLogout = () => {
        logOut()
            .then()
            .catch((err) =>
                console.log(err));

               
    };
    const imgWidth = 50;
    const imgHeight = 50;
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="#deets">
                                <h2 className='text-dark'>BD Food</h2>
                            </Nav.Link>
                        </Nav>
                        <Nav className="mx-auto">
                            <Link style={{ "text-decoration": "none" }} className='me-3 text-dark' to="/">Home</Link>
                            <Link style={{ "text-decoration": "none" }} className='me-3 text-dark' to='blog'>Blog</Link>
                            <Link style={{ "text-decoration": "none" }} className='me-3 text-dark' to='about'>About Us</Link>
                            <Link style={{ "text-decoration": "none" }} className='me-3 text-dark' to='contact'>Contact Us</Link>
                        </Nav>
                        <Nav>
                            {user &&
                            <>
                                <img  style={{ width: imgWidth, height: imgHeight }} src={user.photoURL} alt="" title={user.displayName} />
    
                            </>
                            }
                            {user ? <Button onClick={handleLogout} variant="secondary">Logout</Button> :
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
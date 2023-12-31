import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import './Register.css'

const Register = () => {
    const [correct, setCorrect] = useState('')
    const { createUser } = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false)
    const handleRegister = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        if(password.length < 6){
            setCorrect('password should be at least 6 characters')
            return;
        }

        console.log(name, photo, email, password);
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch(error =>{
                console.log(error);
            })
    }

    const handleAccepted = event =>{
        setAccepted(event.target.checked);
    }

    return (
        <Container className='w-75 mx-auto text-center'>
            <h3 className="mt-4">Please Register</h3>
            <p>{correct}</p>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        className="mb-3"
                        type="checkbox"
                        name='accept'
                        label={<>Accept <Link to='/terms' activeClassName="active"> Terms and Conditions</Link></>} />
                </Form.Group>
                <Button variant="primary" disabled={!accepted} type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className='text-secondary'>
                    Already Have an Account? <Link to='/login' activeClassName="active">Login</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;

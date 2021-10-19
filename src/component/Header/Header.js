import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className="text-dark">
                        <h4>Health-lab-care</h4>
                    </Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="">
                            <Link to="/home">
                                <button type="button" className="btn btn-outline-info mx-2">Home</button>
                            </Link>
                            <Link to="/doctors">
                                <button type="button" className="btn btn-outline-info mx-2">Doctors</button>
                            </Link>
                            <Link to="/about">
                                <button type="button" className="btn btn-outline-info mx-2">About us</button>
                            </Link>

                        </Nav>
                        {user?.email ?

                            <button onClick={logOut} type="button" className="btn btn-outline-info ">Logout</button> :

                            <Link to="/login">
                                <button type="button" className="btn btn-outline-info ">Login</button>
                            </Link>
                        }
                        <Link to="/register">
                            <button type="button" className="btn btn-outline-info mx-2">SignUp</button>
                        </Link>
                        <Navbar.Text>
                            <span className="text-info">Signed in as:</span> <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
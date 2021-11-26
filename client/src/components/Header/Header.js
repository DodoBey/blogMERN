import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Navbar expand="lg"
            style={{
                backgroundColor: "#676d86",
            }}>
            <Container>
                <Navbar.Brand><Link to="/">YourBlog</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className='m-auto'>
                    </Nav>
                    <Nav
                        className="my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link><Link to="/blog">Blog</Link></Nav.Link>
                        <NavDropdown title="Dogukan Yigiter" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action2">My Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action3">
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
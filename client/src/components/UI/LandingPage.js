import React from 'react';
import { Container, Row, Button } from "react-bootstrap";
import "./LandingPage.css"

const LandingPage = () => {
    return (
        <div className="main">
            <Container>
                <Row>
                    <div className="main-area">
                        <div>
                            <h1>Welcome to YourBlog!</h1>
                            <p>Place for to share your blogs.</p>
                            <div className="button-area">
                                <a href="/login">
                                    <Button size="lg" variant="primary" classname="mainButtons">Login</Button>
                                </a>
                                <a href="/register">
                                    <Button size="lg" variant="outline-primary" classname="mainButtons">Register</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage

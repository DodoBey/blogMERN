import React from 'react';
import { Container, Row, Button } from "react-bootstrap";
import { useNavigate } from 'react-router';
import "./LandingPage.css"

const LandingPage = () => {

    const navigate = useNavigate();

    // useEffect(() => {
    //     const userInfo = localStorage.getItem("userInfo");
    //     if (userInfo) {
    //         navigate("/blog")
    //     }
    // }, []);

    return (
        <div className="main">
            <Container>
                <Row>
                    <div className="main-area">
                        <div>
                            <h1>Welcome to YourBlog!</h1>
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

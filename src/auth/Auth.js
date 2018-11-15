import React from 'react'; 
import { Container, Row, Col } from 'reactstrap'; 
import Signup from './Signup'; 
import Login from './Login';
import './auth.css'; 
import About from '../auth/About'




const Auth = (props) => {
    return (
        <Container className="auth-container">
            <Row>
            <Col md="3">
                    <About />
                </Col>
                <Col md="3">
                    <Signup setToken={props.setToken}/>
                </Col>
                <Col md="3" className="login-col">
                    <Login setToken={props.setToken}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Auth; 
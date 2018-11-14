import React, { Component } from 'react'; 
import { 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button,
    Container
} from 'reactstrap';
import './Navbar.css';


class Sitebar extends Component {
    constructor(props) {
        super(props);
            this.state = {
                isOpen: false, 
            }
    } 

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }; 

    render () {
        return (
            
            
                <Container className="navbar-container">
                  <Navbar color="faded" light expand="md">
                <NavbarBrand href="/" className="navTitle">PathFound</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <Button onClick={() => this.props.clickLogout()}>Sign Out</Button>
                </NavItem>
                </Nav>
                </Collapse>
                </Navbar>
                </Container>
            
            
        )
    }
}


export default Sitebar;
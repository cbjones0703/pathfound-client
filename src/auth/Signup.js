import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button, /*Modal, ModalHeader, ModalBody*/ } from 'reactstrap';
import APIURL from '../helpers/environment'; 

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            email: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value, 
        });
    }

    handleSubmit = (event) => {
        console.log(this.state)
        fetch(`${APIURL}/api/user`, {
            method: 'POST', 
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
            localStorage.setItem('username', data.user.username);
            localStorage.setItem('owner', data.user.id);  
        });
        event.preventDefault()
    };

    render() {
        return (
            <div>
                 {/* <Modal isOpen={true} >
                    <ModalHeader>Sign Up!</ModalHeader>
                    <ModalBody> */}
                <h1>Sign Up</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="su_username">Username</Label>
                        <Input id="su_username" type="text" name="username" placeholder="enter username" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="su_password">Password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="su_email">Email</Label>
                        <Input id="su_email" type="text" name="email" placeholder="enter email" onChange={this.handleChange} />
                    </FormGroup>
                    <Button outline type="submit" color="primary"> Submit </Button>
                </Form>
            {/* </ModalBody>
        </Modal> */}
            </div>
        )
    }
}

export default Signup;
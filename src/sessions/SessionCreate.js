import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SessionCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:'',
            session_title: '',
            date: '',
            character: '',
            rewards: '',
            session_description: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/api/log/`, {
            method: 'POST',
            body: JSON.stringify({ log: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => res.json())
        .then((logData) => {
            this.props.updateSessionsArray();
            this.setState({
                id: '',
                session_title: '',
                date: '',
                character: '',
                rewards: '',
                session_description: ''
            })
        })
    }


    render() {
        return (
            <div>
                <h3>Log a Session!</h3>
                <hr />
                <Form onSubmit={this.handleSubmit} >
                <FormGroup>
                                <Label for="session_title">Session Title</Label>
                                <Input id="session_title" type="text" name="session_title" value={this.state.session_title} placeholder="enter session title" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                             <Label for="date">Date</Label>
                            <Input type="date" name="date" id="date" value={this.state.date} placeholder="enter date" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="character">Character</Label>
                                <Input id="character" type="text" name="character" value={this.state.character} placeholder="character" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="rewards">Rewards</Label>
                                <Input id="rewards" type="text" name="rewards" value={this.state.rewards} placeholder="rewards" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="session_description">Session Description</Label>
                                <Input id="session_description" type="textarea" name="session_description" value={this.state.session_description} placeholder="session description" onChange={this.handleChange} />
                            </FormGroup>
                            <Button outline color="success" type="submit" color="success">Submit</Button>
                </Form>
            </div>
            )
    }
}

export default SessionCreate; 
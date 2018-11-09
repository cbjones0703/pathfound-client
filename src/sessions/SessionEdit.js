import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

class SessionEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            session_title: '',
            date: '',
            character: '',
            rewards: '',
            session_description: '',
        };
    }

    componentWillMount(){
        this.setState({
            id: this.props.session.id,
            session_title: this.props.session.session_title,
            date: this.props.session.date,
            character: this.props.session.character,
            rewards: this.props.session.rewards,
            session_description: this.props.session.session_description
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }

    render() {
        return (
            <div>
                <Modal isOpen={true} >
                    <ModalHeader>Update your Session</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Label for="session_title">Session Title</Label>
                                <Input id="session_title" type="text" name="session_title" value={this.state.session_title} placeholder="enter session_title" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="date" >Date</Label>
                                <Input id="date" type="text" name="date" value={this.state.date} placeholder="enter date" onChange={this.handleChange} />
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
                                <Input id="session_description" type="text" name="session_description" value={this.state.session_description} placeholder="session_description" onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" color="primary">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default SessionEdit; 
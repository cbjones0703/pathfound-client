import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

class CharacterEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            character_name: '',
            character_class: '',
            character_race: ''
            
        };
    }

    componentWillMount(){
        this.setState({
            id: this.props.character.id,
            character_name: this.props.character.character_name,
            character_class: this.props.character.character_class,
            character_race: this.props.character.character_race
            
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
                    <ModalHeader>Update your Character</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} >
                        <FormGroup>
                    <Label for="character_name">Character Name</Label>
                    <Input id="character_name" type="text" name="character_name" value={this.state.character_name} placeholder="enter character name here" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="character_race">Character Race</Label>
                    <Input id="character_race" type="text" name="character_race" value={this.state.character_race} placeholder="enter character race here" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="character_class">Character Class</Label>
                    <Input id="character_class" type="text" name="character_class" value={this.state.character_class} placeholder="enter character class here" onChange={this.handleChange} />
                </FormGroup>
                            <Button outline type="submit" color="success">Submit</Button>
                            <Button outline type="submit" color="primary">Cancel</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default CharacterEdit; 
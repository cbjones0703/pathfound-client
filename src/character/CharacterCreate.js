import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../helpers/environment'

class CharacterCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
         character_name: '',
         character_race: '',
         character_class: ''
         
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/api/character/`, {
            method: 'POST',
            body: JSON.stringify({ character: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => res.json())
        .then((characterData) => {
            this.props.updateCharactersArray();
            this.setState({
               character_name: '',
               character_race: '',
               character_class: ''
               
            })
        })
    }


    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit} >
                <FormGroup>
                    <Label for="character_name">Character Name</Label>
                    <Input id="character_name" type="text" name="character_name" value={this.state.character_name} placeholder="enter character name here" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="character_race">Character Race</Label>
                    <Input id="character_race" type="text" name="character_race" value={this.state.race} placeholder="enter character race here" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="character_class">Character Class</Label>
                    <Input id="character_class" type="text" name="character_class" value={this.state.class} placeholder="enter character class here" onChange={this.handleChange} />
                </FormGroup>
                <Button outline type="submit" color="success">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default CharacterCreate; 
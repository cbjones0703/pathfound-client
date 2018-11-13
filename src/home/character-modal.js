// import React from 'react';
// import CharacterCreate from '../character/CharacterCreate'
// import CharacterTable from '../character/CharacterTable'
// import CharacterEdit from '../character/CharacterEdit'

// import {Container, Row, Col, Form, FormGroup, Label, Input,  Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// class CharacterModal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         sessions: [],
//         updatePressed: false,
//         characterToUpdate: {},
//         modal: false
//     };

//     this.toggle = this.toggle.bind(this);
//   }

//   toggle() {
//     this.setState({
//       modal: !this.state.modal
//     });
//   }

//   componentWillMount() {
//     this.fetchCharacters()
// }

// updateCharactersArray = () => {
//     this.fetchCharacters()
// }

// fetchCharacters = () => {
//     fetch("http://localhost:3000/api/character", {
//         method: 'GET',
//         headers: new Headers({
//           'Content-Type': 'application/json',
//           'Authorization': this.props.token
//         })
//       })
//       .then((res) => res.json())
//       .then((characterData) => {
//           return this.setState({ characters: characterData })
//         })
//     }

// characterDelete = (event) => {
//     fetch(`http://localhost:3000/api/character/${event.target.id}`, {
//   method: 'DELETE',
//   body: JSON.stringify({ log: { id: event.target.id } }),
//   headers: new Headers({
//     'Content-Type': 'application/json',
//     'Authorization': this.props.token
//   })
// })
// .then((res) => this.fetchCharacters())
// }
// characterUpdate = (event, character) => {
//     fetch(`http://localhost:3000/api/character/${character.id}`, {
//         method: 'PUT',
//         body: JSON.stringify({ log: character }),
//         headers: new Headers({
//           'Content-Type': 'application/json',
//           'Authorization': this.props.token
//         })
//       })
//       .then((res) => {
//         this.setState({ updatePressed: false })
//         this.fetchCharacters();
//       })
// }

// setUpdatedCharacter = (event, character) => {
//     this.setState({
//         characterToUpdate: character,
//         updatePressed: true
//     })
// }

//   render() {
   
//     return (
//       <div>
//         <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
//         <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
//           <ModalHeader toggle={this.toggle}>Log a character!</ModalHeader>
//           <ModalBody>
//           <Form onSubmit={this.handleSubmit} >
//           <FormGroup>
//                     <Label for="character_name">Character Name</Label>
//                     <Input id="character_name" type="text" name="character_name" value={this.state.character_name} placeholder="enter character name here" onChange={this.handleChange} />
//                 </FormGroup>
//                 <FormGroup>
//                     <Label for="character_race">Character Race</Label>
//                     <Input id="character_race" type="text" name="character_race" value={this.state.race} placeholder="enter character race here" onChange={this.handleChange} />
//                 </FormGroup>
//                 <FormGroup>
//                     <Label for="character_class">Character Class</Label>
//                     <Input id="character_class" type="text" name="character_class" value={this.state.class} placeholder="enter character class here" onChange={this.handleChange} />
//                 </FormGroup>
//                 <Button outline color="success" type="submit" color="success">Submit</Button>
//                 </Form>
//           </ModalBody>
//           <ModalFooter>
//             <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
//             <Button color="secondary" onClick={this.toggle}>Cancel</Button>
//           </ModalFooter>
//         </Modal>
//       </div>
//     );
//     }
// }
// export default CharacterModal;
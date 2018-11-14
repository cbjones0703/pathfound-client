import React from 'react'; 
import CharacterCreate from './CharacterCreate';
import { Container, Row, Col } from 'reactstrap';
import CharacterTable from './CharacterTable' 
import CharacterEdit from './CharacterEdit'; 
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import APIURL from '../helpers/environment'; 




class CharacterIndex extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            characters: [],
            updatePressed: false,
            charcterToUpdate: {},
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

    componentWillMount() {
        this.fetchCharacters()
    }

    updateCharactersArray = () => {
        this.fetchCharacters()
    }

    fetchCharacters = () => {
        fetch(`${APIURL}/api/character`, {
            method: 'GET',
            headers: new Headers({
              'Content-Type': 'application/json',
              'Authorization': this.props.token
            })
          })
            .then((res) => res.json())
            .then((characterData) => {
              return this.setState({ characters: characterData })
            })
        }

    characterDelete = (event) => {
        fetch(`${APIURL}/api/character/${event.target.id}`, {
      method: 'DELETE',
      body: JSON.stringify({ character: { id: event.target.id } }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
    .then((res) => this.fetchCharacters())
  }
    characterUpdate = (event, character) => {
        fetch(`${APIURL}/api/character/${character.id}`, {
            method: 'PUT',
            body: JSON.stringify({ character: character }),
            headers: new Headers({
              'Content-Type': 'application/json',
              'Authorization': this.props.token
            })
          })
          .then((res) => {
            this.setState({ updatePressed: false })
            this.fetchCharacters();
          })
    }

    setUpdatedCharacter = (event, character) => {
        this.setState({
            characterToUpdate: character,
            updatePressed: true
        })
    }

        render() {
            const characters = this.state.characters.length >= 1 ?
            <CharacterTable characters={this.state.characters} delete={this.characterDelete} update={this.setUpdatedCharacter} /> :
            <h2> </h2>
            return (
                <div>
                  <br></br>
                  <br></br>
                  <br></br>
                    <Container>
                    <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel} Log a Character!</Button>
                    </Container>
                    <br></br>
                    <br></br>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Character Log</ModalHeader>
          <ModalBody>
              <Container>
                <Row>
                  <Col md="6">
                    <CharacterCreate token ={this.props.token} updateCharactersArray={this.updateCharactersArray} />
                  </Col>
                  <Col md="6">
                    {
                        this.state.updatePressed ? <CharacterEdit t={this.state.updatePressed} update={this.characterUpdate} character={this.state.characterToUpdate} />
                        : <div></div>
                    }
                  </Col>
                </Row>
                {characters}
              </Container>
              </ModalBody>
              <ModalFooter>
            <Button outline color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
              </Modal>
              </div>
            )
          }

}


export default CharacterIndex; 
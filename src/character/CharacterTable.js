import React from 'react';
import { Table, Button } from 'reactstrap';

const CharacterTable = (props) => {

    return (
        <div>
            <h2>Characters</h2>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Character Name</th>
                        <th>Race</th>
                        <th>Character Class</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.characters.map((character, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{character.id}</th>
                                    <td>{character.character_name}</td>
                                    <td>{character.character_race}</td>
                                    <td>{character.character_class}</td>
                                    <td>

                            <Button outline color="danger" id={character.id} onClick={props.delete} color="danger">Delete</Button>
                            <Button outline color="primary" id={character.id} onClick={e => props.update(e, character)} color="primary">Update</Button>

                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default CharacterTable; 
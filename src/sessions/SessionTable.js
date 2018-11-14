import React from 'react';
import './SessionTable.css';
import { Table, Button, Container } from 'reactstrap';

const SessionTable = (props) => {

    return (
        <div>
            <h2>Session History</h2>
            <hr />
            <Table responsive>
            <Container className="table-container">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Session Title</th>
                        <th>Date</th>
                        <th>Character</th>
                        <th>Rewards</th>
                        <th>Session Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.sessions.map((session, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{session.id}</th>
                                    <td>{session.session_title}</td>
                                    <td>{session.date}</td>
                                    <td>{session.character}</td>
                                    <td>{session.rewards}</td>
                                    <td>{session.session_description}</td>
                                    <td>

                            <Button outline id={session.id} onClick={props.delete} color="danger">Delete</Button>
                            <Button outline id={session.id} onClick={e => props.update(e, session)} color="primary">Update</Button>

                                    </td>
                                </tr>
                                
                            )
                        })
                    }
                </tbody>
                </Container>
            </Table>
        </div>
    );
};

export default SessionTable; 
import React from 'react'; 
import SessionCreate from './SessionCreate';
import { Container, Row, Col } from 'reactstrap';
import SessionTable from './SessionTable' 
import SessionEdit from './SessionEdit'; 
import APIURL from '../helpers/environment'; 


class SessionIndex extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            sessions: [],
            updatePressed: false,
            sessionToUpdate: {}
        }
    }

    componentWillMount() {
        this.fetchSessions()
    }

    updateSessionsArray = () => {
        this.fetchSessions()
    }

    fetchSessions = () => {
        fetch(`${APIURL}/api/log`, {
            method: 'GET',
            headers: new Headers({
              'Content-Type': 'application/json',
              'Authorization': this.props.token
            })
          })
            .then((res) => res.json())
            .then((logData) => {
              return this.setState({ sessions: logData })
            })
        }

    sessionDelete = (event) => {
        fetch(`${APIURL}/api/log/${event.target.id}`, {
      method: 'DELETE',
      body: JSON.stringify({ log: { id: event.target.id } }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
    .then((res) => this.fetchSessions())
  }
    sessionUpdate = (event, session) => {
        fetch(`${APIURL}/api/log/${session.id}`, {
            method: 'PUT',
            body: JSON.stringify({ log: session }),
            headers: new Headers({
              'Content-Type': 'application/json',
              'Authorization': this.props.token
            })
          })
          .then((res) => {
            this.setState({ updatePressed: false })
            this.fetchSessions();
          })
    }

    setUpdatedSession = (event, session) => {
        this.setState({
            sessionToUpdate: session,
            updatePressed: true
        })
    }

        render() {
            const sessions = this.state.sessions.length >= 1 ?
            <SessionTable sessions={this.state.sessions} delete={this.sessionDelete} update={this.setUpdatedSession} /> :
            <h2>Log a session to see table</h2>
            return (
              <Container>
                <Row>
                  <Col md="3">
                    <SessionCreate token ={this.props.token} updateSessionsArray={this.updateSessionsArray} />
                  </Col>
                  <Col md="3">
                    {
                        this.state.updatePressed ? <SessionEdit t={this.state.updatePressed} update={this.sessionUpdate} session={this.state.sessionToUpdate} />
                        : <div></div>
                    }
                  </Col>
                </Row>
                {sessions}
              </Container>
            )
          }

}


export default SessionIndex; 
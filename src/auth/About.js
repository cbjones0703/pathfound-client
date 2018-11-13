
import React from 'react';
import { Button, Fade } from 'reactstrap';

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fadeIn: false };
        this.toggle = this.toggle.bind(this);
    }

    render() {
        return (
            <div>
                <Button color outline="secondary" color="secondary" onClick={this.toggle}>What's PathFound?</Button>
                <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                Dedicated to helping Pathfinders compile their adventures, PathFound allows users to log and update session information as a convenient way to recount character development. 
                <br></br>
                <br></br>
                <br></br>
                Happy Pathfinding!
                </Fade>
            </div>
        );
    }

    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }
};
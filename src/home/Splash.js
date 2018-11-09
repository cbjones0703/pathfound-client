import React from 'react';
import SessionIndex from '../sessions/SessionIndex'

const Splash = (props) => {
    return (
        <div>
            <SessionIndex token={props.sessionToken} />
        </div>
    )
}

export default Splash; 
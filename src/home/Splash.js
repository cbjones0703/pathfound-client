import React from 'react';
import SessionIndex from '../sessions/SessionIndex'
// import CharacterModal from './character-modal'
import CharacterIndex from '../character/CharacterIndex'


const Splash = (props) => {
    return (
        <div>
            {/* <CharacterModal /> */}
            <CharacterIndex token={props.sessionToken} />
            <SessionIndex token={props.sessionToken} />
        </div>
    )
}

export default Splash; 
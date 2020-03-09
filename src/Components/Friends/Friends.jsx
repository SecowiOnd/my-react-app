import React from 'react';
import Friend from './Friend/Friend';

const Friends = (props) => {
    let friendsElements = props.state.friends.map(d => <Friend name={d.name}/> );

    return(
        <div>
            {friendsElements}
        </div>
    )
}

export default Friends;
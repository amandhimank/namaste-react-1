import { useState } from 'react';

const User = ({ name, location }) => {
    const [ count, setCount ] = useState(0);

    return (
        <div className="user-div">
            <h1 className="user-name">{name}</h1>
            <h4 className="user-location">{location}</h4>
            <h3>Likes: {count}</h3>
            <button onClick={() => {setCount(count+1)}}>Like</button>
            <button onClick={() => {
                if(count > 0) setCount(count-1);
            }}>Dislike</button>
        </div>
    )
}

export default User;
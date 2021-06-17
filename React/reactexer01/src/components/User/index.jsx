import React, {useContext} from "react";
import UserContext from "../../context";
import '../../index.css'
import {NavLink} from "react-router-dom";

const User = ({user}) => {
    const {dispatch} = useContext(UserContext);
    const removeUser = (usernames) => {
        dispatch({
            type: 'REMOVE_USERS',
            usernames
        })
    }
    return (
        <div className={'userContainer'}>
            <h3 className={'topBar'}>{user.usernames}, {user.location}</h3>
            <button onClick={() => removeUser(user.usernames)}>Remove</button>
            <button className={'viewButton'}><NavLink to={`/view/${user.usernames}`}>View</NavLink></button>
        </div>

    )
}

export default User;

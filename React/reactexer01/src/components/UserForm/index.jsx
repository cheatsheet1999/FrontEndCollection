import React, {useContext, useEffect, useState} from "react";
import UserContext from "../../context";
import {Link} from "react-router-dom";
import '../../index.css'
import {withRouter} from "react-router-dom";

const UserForm = () => {
    const [usernames, setNames] = useState('');
    const [location, setLocation] = useState('');
    const {dispatch} = useContext(UserContext);
    const createUser = (e) => {
        if(usernames.trim() === '') {
            alert('输入不能为空')
            return;
        }
        e.preventDefault();
        dispatch({
            type: 'ADD_USERS',
            usernames,
            location,
        });
        setNames('');
        setLocation('');
        window.location.href= "/user"
    }


    return (
        <form className={'createContainer'} onSubmit={createUser}>
            <h3>Username</h3>
            <input className={'nameInput'} value={usernames} onChange={(e) => setNames(e.target.value)}/>
            <h3>Location</h3>
            <input className={'locationInput'} value={location} onChange={(e) => setLocation(e.target.value)}/>
            <br/>
            <button>Create</button>
        </form>
    )
}

export default withRouter(UserForm);

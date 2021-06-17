import React, {Component, useContext, useState} from "react";
import UserContext from "../../context";
import {withRouter} from "react-router-dom";



const UpdateList = (props) => {
    const [usernames, setNames] = useState('');
    const [location, setLocation] = useState('');
    const {dispatch} = useContext(UserContext);
    const {id} = props.match.params


    const removeUser = (usernames) => {
        dispatch({
            type: 'REMOVE_USERS',
            usernames
        })
    }

    const updateUser = (e) => {
        // if username 等于这里的 id， 那么我们什么都不做
        // else， 我们加进去新的这个，并且删掉旧的id
        if (usernames.trim() === '') {
            alert('输入不能为空')
            return;
        }
        removeUser()
        dispatch({
            type: 'ADD_USERS',
            usernames,
            location,
        });
        e.preventDefault();
        setNames('');
        setLocation('');
    }


    return (
        <form className={'createContainer'} onSubmit={updateUser}>
            <h3>Username</h3>
            <input className={'nameInput'} placeholder={id} value={usernames}
                   onChange={(e) => setNames(e.target.value)}/>
            <h3>Location</h3>
            <input className={'locationInput'} placeholder={location} value={location}
                   onChange={(e) => setLocation(e.target.value)}/>
            <br/>
            {id===usernames?<button>Create</button>:<button onClick={() => removeUser(id)}>Create</button>}

        </form>
    )
}

export default withRouter(UpdateList);






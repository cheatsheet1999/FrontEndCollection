import {useReducer} from "react";

import React, {useEffect} from "react";
import UserContext from "../context";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";
import UpdateList from "../components/UpdataList";

const usersReducer = (state, action) => {
    switch (action.type) {
        case 'POPULATE_USERS':
            return action.users;
        case 'ADD_USERS':
            const namesCollection = state.map((user) => user.usernames);
            for(let i = 0; i < namesCollection.length; i++) {
                if(action.usernames === namesCollection[i]) {
                    alert('This username is already exist')
                    return state
                }
            }
            return [...state, {usernames: action.usernames, location: action.location}];

        case 'REMOVE_USERS':
            return state.filter((user) => user.usernames !== action.usernames)

        // case 'UPDATE_USERS':
        //     return state.filter((user) => user.usernames === action.usernames)
        default:
            return state;
    }
}

export const UserStatus = () => {
    const [users, dispatch] = useReducer(usersReducer, []);

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('users'));
        if(users) {
            dispatch({type: 'POPULATE_USERS', users})
        }
    },[])

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    }, [users])

    return (
        <UserContext.Provider value={{users, dispatch}}>
            <UserForm/>
        </UserContext.Provider>
    )
}

export const UserCollection = () => {
    const [users, dispatch] = useReducer(usersReducer, []);
    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('users'));
        if(users) {
            //setUsers(userData);
            dispatch({type: 'POPULATE_USERS', users})
        }
    },[])

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    }, [users])

    return (
        <UserContext.Provider value={{users, dispatch}}>
            <UserList/>
        </UserContext.Provider>
    )
}


export const UserUpdate = () => {
    const [users, dispatch] = useReducer(usersReducer, []);

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('users'));
        if(users) {
            //setUsers(userData);
            dispatch({type: 'POPULATE_USERS', users})
        }
    },[])

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    }, [users])

    return (
        <UserContext.Provider value={{users, dispatch}}>
        <UpdateList/>
        </UserContext.Provider>
    )
}

export default usersReducer;

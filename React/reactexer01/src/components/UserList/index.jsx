import React, {useContext} from "react";
import User from "../User";
import UserContext from "../../context";

const UserList = () => {
    const {users} = useContext(UserContext);
    return users.map((user) => {
        return <User key={user.usernames} user={user}/>
    })
}

export default UserList;

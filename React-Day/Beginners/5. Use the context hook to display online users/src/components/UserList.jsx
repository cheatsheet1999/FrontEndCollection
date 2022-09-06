import { useContext, useEffect } from "react";
import UsersContext from "../contexts/UsersContext";

const UserList = () => {
  const { userState, setUserState } = useContext(UsersContext);

  const handleRandomUserStatus = () => {
    let userNamesArr = Object.keys(userState);
    let randomNum = Math.floor(Math.random() * userNamesArr.length);
    let new_users = { ...userState };
    console.log(new_users[userNamesArr[randomNum]]);

    new_users[userNamesArr[randomNum]] = !userState[userNamesArr[randomNum]];
    setUserState(new_users);
  };

  useEffect(() => {
    let interval = setInterval(handleRandomUserStatus, 2000);
    return () => clearInterval(interval);
  }, [userState]);

  return (
    <div>
      {Object.keys(userState).map((key) => (
        <p>{`${key}: ${userState[key] ? "🟢" : "🔴"}`}</p>
      ))}
    </div>
  );
};

export default UserList;

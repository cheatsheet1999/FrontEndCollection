import React, { useContext, useEffect, useState } from "react";
import UserList from "./components/UserList";
import UsersContext from "./contexts/UsersContext";

function App() {
  const [userState, setUserState] = useState({
    Bob: true,
    Gary: true,
    Jessica: true,
    Sam: true,
    Eric: true,
  });

  // YOUR CODE HERE

  return (
    <UsersContext.Provider value={{userState, setUserState}}>
    <UserList/>
    </UsersContext.Provider>
  )
}


export default App;
import React, {useState, useEffect} from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
})

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn')
        if(storedUserLoggedInInformation === '1') {
            setIsLoggedIn(true)
        }
    }, [])

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways

        //在这加个localstorage，刷新也会保存
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    return <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
    }}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;

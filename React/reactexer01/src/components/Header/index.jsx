import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <button><NavLink to={"/"}>Home</NavLink></button>
            <button><NavLink to={"/user"}>Users</NavLink></button>
            <button><NavLink to={"/create"}>Create</NavLink></button>
        </div>
    )
}

export default Header;

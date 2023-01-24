import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar({ user, setUser, setIsLoggedIn }) {
    const navigate = useNavigate()

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        })
        console.log("User logged out")
        navigate("LoggedOut");
        setIsLoggedIn(false);
        //setUser({})
    }

    function handleEdit() {
        navigate("EditUser")
    }

    return (
        <div className="navBar">
            <Link
                to="LoggedOut"
                onClick={handleLogout}
                className="nav-link"
            > Log Out
            </Link>
            <h3>{user.username}</h3>
            <img
                className="avatar"
                src={user.user_image}
                alt={user.username}
            />
            <br></br>
            <Link
                to="EditUser"
                onClick={handleEdit}
                className="nav-link"
            > Edit Account Details
            </Link>
        </div>
    );
}

export default NavBar;
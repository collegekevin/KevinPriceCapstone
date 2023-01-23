import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar({ user, setIsLoggedIn }) {
    const navigate = useNavigate()

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        })
        console.log("User logged out")
        navigate("LoggedOut");
        setIsLoggedIn(false);
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

        </div>
    );
}

export default NavBar;
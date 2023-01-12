import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar({ user, setIsLoggedIn }) {
    const navigate = useNavigate()

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        })
        console.log("User logged out")
        navigate("/");
        setIsLoggedIn(false);
    }

    return (
        <div className="navBar">
            <img
                className="avatar"
                src={user.user_image}
                alt={user.username}
            />
            <Link
                to="/"
                onClick={handleLogout}
                className="nav-link"
            > Log Out
            </Link>
        </div>
    );
}

export default NavBar;
import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import DisplayAds from "./DisplayAds";

function NavBar({ user, setUser, setIsLoggedIn, isLoggedIn }) {
    const navigate = useNavigate()

    console.log(isLoggedIn)

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


        <div className="navbar">
            <div className="nav-buttons">
                <div>{user.id ?
                    <Link
                        to="LoggedOut"
                        onClick={handleLogout}
                        className="nav-link"
                    > Log Out
                    </Link> : null}
                </div>
                <br></br>
                <div>{user.id ? <Link
                    to="EditUser"
                    onClick={handleEdit}
                    className="nav-link"
                > Edit Account
                </Link> : null}
                </div>
            </div>
            <div className="title-div">
                <h1 className="site-title">The Giving Page</h1>
            </div> {user.id ?
                <div className="nav-avatar">
                    <img
                        className="avatar"
                        src={user.user_image}
                        alt={user.username}
                    />
                    <h3 className="avatar-name">{user.username}</h3>
                    <br></br>
                </div> : null}
        </div >
    );
}

export default NavBar;
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function CreateUser() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [profileImg, setProfileImg] = useState("");
    const [bio, setBio] = useState("");

    //UserId  

    const navigate = useNavigate()

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    function handleProfileImgChange(e) {
        setProfileImg(e.target.value);
    }

    function handleBioChange(e) {
        setBio(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("submitted");

        const userObj = {
            username,
            first_name: firstName,
            last_name: lastName,
            password,
            user_image: profileImg,
            bio: bio
        };
        console.log(userObj);

        const configObject = {
            method: "POST",
            headers: {
                "content-type": "application/JSON",
            },
            body: JSON.stringify(userObj),
        };

        fetch("/create", configObject)
            .then((r) => r.json())
            .then((user) => {
                setFirstName("");
                setLastName("");
                setUsername("");
                setPassword("");
                setProfileImg("");
                // navigate(`/users/${user.id}`)
                navigate(`/home`)
            });
    }

    return (
        <div>
            <div className="create-post-card">
                <div className="create-post-form">
                    <form onSubmit={handleSubmit}>
                        <input
                            className="create-input-field"
                            name="username"
                            type="text"
                            value={username}
                            placeholder="Enter Username"
                            onChange={handleUsernameChange}
                            required
                        />
                        <br />
                        <input
                            className="create-input-field"
                            name="password"
                            type="password"
                            value={password}
                            placeholder="Enter Password"
                            onChange={handlePasswordChange}
                            required
                        />
                        <br />
                        <input
                            className="create-input-field"
                            name="first_name"
                            type="text"
                            value={firstName}
                            placeholder="Enter Your First Name"
                            onChange={handleFirstNameChange}
                            required
                        />
                        <br />
                        <input
                            className="create-input-field"
                            name="last_name"
                            type="text"
                            value={lastName}
                            placeholder="Enter Your Last Name"
                            onChange={handleLastNameChange}
                            required
                        />
                        <br />
                        <input
                            className="create-input-field"
                            name="profile_img"
                            value={profileImg}
                            placeholder="Enter Profile Img URL Here"
                            onChange={handleProfileImgChange}
                            required
                        />
                        <br />
                        <input
                            className="create-big-input-field"
                            name="profile_img"
                            value={bio}
                            placeholder="What do you want people to know about you?"
                            onChange={handleBioChange}
                            required
                        />
                        <br />
                        <button className="button" type="submit">Create Account</button>
                    </form>
                </div>
                <p className="back-link"><Link to="/">← Back to Log In</Link></p>
            </div>
        </div>
    )
}

export default CreateUser;
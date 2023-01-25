import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import DisplayUserAds from "./components/DisplayUserAds";

function EditUser({ user, setUser }) {

    // const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    const [profileImg, setProfileImg] = useState("");
    const [bio, setBio] = useState("");

    //UserId  

    const navigate = useNavigate()

    // function handleUsernameChange(e) {
    //     setUsername(e.target.value);
    // }

    // function handlePasswordChange(e) {
    //     setPassword(e.target.value);
    // }

    // function handleFirstNameChange(e) {
    //     setFirstName(e.target.value);
    // }

    // function handleLastNameChange(e) {
    //     setLastName(e.target.value);
    // }

    function handleProfileImgChange(e) {
        setProfileImg(e.target.value);
    }

    function handleBioChange(e) {
        setBio(e.target.value);
    }

    function handleNewPic(e) {
        e.preventDefault();
        console.log("New Pic submitted");

        const picEditObj = {
            username: user.username,
            first_name: user.first_name,
            last_name: user.last_name,
            password,
            user_image: profileImg,
            bio: user.bio
        };

        console.log(picEditObj);

        const configObject = {
            method: "PATCH",
            headers: {
                "content-type": "application/JSON",
            },
            body: JSON.stringify(picEditObj),
        };

        fetch(`/user/${user.id}`, configObject)
            .then((r) => r.json())
            .then((updatedUser) => {
                // setFirstName("");
                // setLastName("");
                // setUsername("");
                // setPassword("");
                setProfileImg("");
                setUser(updatedUser)
                // navigate(`/users/${user.id}`)
                navigate(`/home`)
            });
    }

    function handleNewBio(e) {
        e.preventDefault();
        console.log("New Bio submitted");

        const newBioObj = {
            username: user.username,
            first_name: user.first_name,
            last_name: user.last_name,
            password,
            user_image: user.user_image,
            bio: bio
        };

        console.log(newBioObj);

        const configObject = {
            method: "PATCH",
            headers: {
                "content-type": "application/JSON",
            },
            body: JSON.stringify(newBioObj),
        };

        fetch(`/users/${user.id}`, configObject)
            .then((r) => r.json())
            .then((updatedUser) => {
                // setFirstName("");
                // setLastName("");
                // setUsername("");
                // setPassword("");
                //setProfileImg("");
                setBio('');
                // navigate(`/users/${user.id}`)
                setUser(updatedUser)
                navigate(`/home`)
            });
    }

    return (
        <div>
            <div className="create-post-card">
                <div className="create-post-form">
                    <form onSubmit={handleNewPic}>
                        {/* <input
                            className="create-input-field"
                            name="username"
                            type="text"
                            value={username}
                            placeholder="Enter Username"
                            onChange={handleUsernameChange}
                            required
                        />
                        <br /> */}
                        {/* <input
                            className="create-input-field"
                            name="password"
                            type="password"
                            value={password}
                            placeholder="Enter Password"
                            onChange={handlePasswordChange}
                            required
                        />
                        <br /> */}
                        {/* <input
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
                        <br /> */}
                        <br />
                        <p>Enter an updated profile picture</p>
                        <input
                            className="create-big-input-field"
                            name="profile_img"
                            value={profileImg}
                            placeholder="New Photo"
                            onChange={handleProfileImgChange}
                            required
                        />
                        <br />
                        <button type="submit">Submit New Pic</button>
                    </form>
                    <form onSubmit={handleNewBio}>
                        <br />
                        <p>Update your bio</p>
                        <input
                            className="create-big-input-field"
                            name="profile_img"
                            value={bio}
                            placeholder={user.bio}
                            onChange={handleBioChange}
                            required
                        />
                        <br />
                        <button type="submit">Submit New Bio</button>
                    </form>
                </div>
                <p> <Link to="/Home">Back to Homepage</Link></p>
            </div>
            <DisplayUserAds user={user} />
        </div>
    )
}

export default EditUser

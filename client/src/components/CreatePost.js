import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Post from "./Post"
import DisplayUserAds from './DisplayUserAds'

function CreatePost({ user }) {

    const [postImage, setPostImage] = useState("");
    const [caption, setCaption] = useState("");
    const [posts, setPosts] = useState([])
    const [createdPost, setCreatedPost] = useState({})
    // const [newPostArray, setNewPostArray] = useState([])

    const navigate = useNavigate()

    function handlePostSubmit(e) {
        e.preventDefault();
        console.log("submitted");
        console.log(user);
        console.log(user.id)

        const postObj = { post_image: postImage, caption, user_id: user.id };
        console.log(postObj)

        const configObject = {
            method: "POST",
            headers: {
                "content-type": "application/JSON",
            },
            body: JSON.stringify(postObj),
        };

        fetch("/createpost", configObject)
            .then((r) => r.json())
            .then((postReturn) => {
                setPosts((posts) => [postReturn, ...posts]);
                setPostImage("");
                setCaption("");
                setCreatedPost(postReturn)
                navigate(`/home`)
                // useNavigate(`/home`)
            });

        return (
            <div>
                <Post key={createdPost.id} post={createdPost} user={user} />
            </div>
        )
    }

    function handleImageChange(e) {
        setPostImage(e.target.value);
    }

    function handleCaptionChange(e) {
        setCaption(e.target.value);
    }

    return (
        <div className="center-stuff">
            <p className="homepage-return"> <Link to="/Home">Back to Homepage</Link></p>
            <form onSubmit={handlePostSubmit}>
                <input
                    className="create-big-input-field"
                    name="postImage"
                    type="text"
                    value={postImage}
                    placeholder="Submit a photo"
                    onChange={handleImageChange}
                    required
                />
                <br></br>
                <input
                    className="create-big-input-field"
                    name="caption"
                    type="text"
                    value={caption}
                    placeholder="Comment on your photo"
                    onChange={handleCaptionChange}
                    required
                />
                <br></br>
                <button className="button" type="submit">Create Post</button>
            </form>

            <DisplayUserAds user={user} />
        </div>
    );
}

export default CreatePost;

//   return (
//     <div>
//         <div className="create-post-card">
//             <div className="create-post-form">
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         className="create-input-field"
//                         name="username"
//                         type="text"
//                         value={username}
//                         placeholder="Enter Username"
//                         onChange={handleUsernameChange}
//                         required
//                     />
//                     <br />
//                     <input
//                         className="create-input-field"
//                         name="password"
//                         type="password"
//                         value={password}
//                         placeholder="Enter Password"
//                         onChange={handlePasswordChange}
//                         required
//                     />
//                     <br />
//                     <input
//                         className="create-input-field"
//                         name="first_name"
//                         type="text"
//                         value={firstName}
//                         placeholder="Enter Your First Name"
//                         onChange={handleFirstNameChange}
//                         required
//                     />
//                     <br />
//                     <input
//                         className="create-input-field"
//                         name="last_name"
//                         type="text"
//                         value={lastName}
//                         placeholder="Enter Your Last Name"
//                         onChange={handleLastNameChange}
//                         required
//                     />
//                     <br />
//                     <input
//                         className="create-input-field"
//                         name="profile_img"
//                         value={profileImg}
//                         placeholder="Enter Profile Img URL Here"
//                         onChange={handleProfileImgChange}
//                         required
//                     />
//                     <br />
//                     <input
//                         className="create-big-input-field"
//                         name="profile_img"
//                         value={bio}
//                         placeholder="What do you want people to know about you?"
//                         onChange={handleBioChange}
//                         required
//                     />
//                     <br />
//                     <button className="button" type="submit">Create Account</button>
//                 </form>
//             </div>
//             <p className="back-link"><Link to="/">← Back to Log In</Link></p>
//         </div>
//     </div>
// )
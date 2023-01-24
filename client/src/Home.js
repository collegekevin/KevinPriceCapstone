import { useState, useEffect } from "react";
import CreatePost from "./CreatePost";
import { Link } from "react-router-dom";
import DisplayAds from "./DisplayAds";
import DisplayHomePosts from "./DisplayHomePosts";
import DisplayFollows from "./DisplayFollows";

function Home({ user, setUser }) {

    //const [posts, setPosts] = useState([])
    setUser(user)

    return (
        <div className='home-page'>
            <h1 className='greeting'>Hey {user.first_name}, thanks for being here!</h1>
            <br />
            <h2 className='subheading'>You're helping to raise money for amazing charities</h2>
            <h2 className='subheading'>and the world just got better because of you.</h2>
            <br />
            <h3 className='subheading'> <em>(Provided I can get this to work)</em> </h3>
            {/* <p id="click-details">｛ <em>Which is questionable at this point</em> ｝</p> */}
            <DisplayFollows user={user} />
            <p> <Link to="/CreatePost">
                <button>Create a Post</button></Link></p>
            <DisplayHomePosts user={user} />
            {/* <DisplayPosts posts={posts} setPosts={setPosts} user={user} /> */}
            <DisplayAds user={user} />
        </div>
    );
}

export default Home;
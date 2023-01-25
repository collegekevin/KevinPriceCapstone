import { useState, useEffect } from "react";
import CreatePost from "./CreatePost";
import { Link } from "react-router-dom";
import DisplayUserAds from './DisplayUserAds'
import DisplayHomePosts from "./DisplayHomePosts";
import DisplayFollows from "./DisplayFollows";

function Home({ user, setUser, isLoggedIn, setIsLoggedIn }) {

    console.log(isLoggedIn)
    setIsLoggedIn(true)
    //const [posts, setPosts] = useState([])
    // setUser({})
    // console.log(user)
    // setUser(user)
    // console.log(user)

    return (
        <div className='home-page'>
            <h1 className='greeting'>Hey {user.first_name}, thanks for being here!</h1>
            <br />
            <h2 className='subheading'>You're helping to raise money for amazing charities</h2>
            <h2 className='subheading'>and the world just got better because of you.</h2>
            <br />
            <DisplayUserAds user={user} />
            {/* <h3 className='subheading'> <em>(Provided I can get this to work)</em> </h3>  */}
            {/* <p id="click-details">｛ <em>Which is questionable at this point</em> ｝</p> */}
            <div className="center-stuff">
                <DisplayFollows user={user} />
                <p> <Link to="/CreatePost">
                    <button >Create a Post</button></Link></p>
                <p> <Link to="/YourPosts"><button >View Your Posts</button></Link></p>
            </div>
            <DisplayHomePosts user={user} />
            {/* <DisplayPosts posts={posts} setPosts={setPosts} user={user} /> */}
            <DisplayUserAds user={user} />
        </div>
    );
}

export default Home;
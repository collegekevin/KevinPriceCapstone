import { useState, useEffect } from "react";
import CreatePost from "./CreatePost";
import { Link } from "react-router-dom";
import DisplayAds from "./DisplayAds";
import DisplayPosts from "./DisplayPosts";

function Home({ user }) {

    const [posts, setPosts] = useState([])

    return (
        <div className='home-page'>
            <h1 className='greeting'>Hey {user.first_name}, thanks for being here!</h1>
            <br />
            <h2 className='subheading'>You're helping to raise money for amazing charities</h2>
            <h2 className='subheading'>and the world just got better because of you.</h2>
            {/* <UserTrips user={user} parks={parks} checkedActivities={checkedActivities}/> */}
            <br />
            <h3 className='subheading'> <em>(Provided I can get this to work)</em> </h3>
            {/* <p id="click-details">｛ <em>Which is questionable at this point</em> ｝</p> */}
            <p> <Link to="/CreatePost">Create a Post</Link></p>
            <DisplayPosts posts={posts} setPosts={setPosts} />
            <DisplayAds />
        </div>
    );
}

export default Home;
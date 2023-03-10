import { useEffect, useState } from "react"
import Post from "./Post"

function DisplayPosts({ user, userPageInfo }) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("/posts")
            .then((resp) => resp.json())
            .then((posts) => setPosts(posts))
    }, [])

    //console.log(posts)

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post} user={user} userPageInfo={userPageInfo} />)}
        </div>
    )
}


export default DisplayPosts
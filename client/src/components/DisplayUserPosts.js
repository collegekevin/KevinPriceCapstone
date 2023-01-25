import { useEffect, useState } from "react"
import YourPosts from "./YourPosts"
import DisplayUserAds from "./DisplayAds"

function DisplayUserPosts({ user, userPageInfo }) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`/posts`)
            .then((resp) => resp.json())
            .then((posts) => setPosts(posts))
    }, [])

    console.log(posts)

    return (
        <div>
            <DisplayUserAds user={user} />
            {posts.map(post => <YourPosts key={post.id} post={post} user={user} />)}
            <DisplayUserAds user={user} />
        </div>
    )
}


export default DisplayUserPosts
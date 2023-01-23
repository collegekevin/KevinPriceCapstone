import { useEffect, useState } from "react"
import HomePost from "./HomePost"

function DisplayHomePosts({ user }) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("/posts")
            .then((resp) => resp.json())
            .then((posts) => setPosts(posts))
    }, [])


    console.log(user.home_page_post)

    return (
        <div>
            {posts.map(post => <HomePost key={post.id} post={post} user={user} />)}
        </div>
    )
}


export default DisplayHomePosts
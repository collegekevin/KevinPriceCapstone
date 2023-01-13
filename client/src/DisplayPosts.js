import { useEffect, useState } from "react"
import Post from "./Post"

function DisplayPosts({ posts, setPosts }) {

    useEffect(() => {
        fetch("/posts")
            .then((resp) => resp.json())
            .then((posts) => setPosts(posts))
    }, [])

    console.log(posts)

    return (
        <div>
            {posts.map(post => <Post post={post} />)}
        </div>
    )
}


export default DisplayPosts
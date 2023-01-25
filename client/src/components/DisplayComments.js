import { useEffect, useState } from "react"
import Post from "./Post"

function DisplayComments({ post, user }) {

    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch("/comments")
            .then((resp) => resp.json())
            .then((comments) => setComments(comments))
    }, [])

    console.log(comments)

    return (
        <div>
            {comments.map(comment => < Comment post={post} user={user} />)}
        </div>
    )
}


export default DisplayComments
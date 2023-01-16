import { useState } from "react";

function Post({ post, user }) {

    const [commentText, setCommentText] = useState('')

    //console.log(post)

    function handleLike() {
        console.log("liked");

        const likeObj = { post_id: post.id, user_id: user.id };
        console.log(likeObj)

        const configObject = {
            method: "POST",
            headers: {
                "content-type": "application/JSON",
            },
            body: JSON.stringify(likeObj),
        };

        fetch("/createlike", configObject)
            .then((resp) => resp.json())
            .then((createLikeReturn) => {
                console.log(createLikeReturn)
            });
    }

    function handleCommentChange(e) {
        setCommentText(e.target.value);
        console.log(commentText)
    }

    function handleAddComment(e) {

        e.preventDefault()

        const commentObj = { comment_text: commentText, post_id: post.id, user_id: user.id };
        console.log(commentObj)

        const configCommentObject = {
            method: "POST",
            headers: {
                "content-type": "application/JSON",
            },
            body: JSON.stringify(commentObj),
        };

        console.log(commentObj)

        fetch("/createcomment", configCommentObject)
            .then((resp) => resp.json())
            .then((createCommentReturn) => {
                console.log(createCommentReturn)
            });
    }


    // const likeObj = { likes: (post.likes += 1) };
    // const configObject = {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/JSON",
    //   },
    //   body: JSON.stringify(likeObj),
    // };
    // fetch(`/posts/${post.id}`, configObject)
    //   .then((r) => r.json())
    //   .then((likes) => {
    //     console.log(likes);
    //     setLikes(likes);
    //   });

    //I want to use the info from the fetch to post the username, not the user info passed down. I don't need that.

    return (
        <div className="post-stlying">
            <p>Post from {user.username}</p>
            <img src={post.post_image} alt={"Pic issue"} />
            <p>{post.caption}</p>
            <span class="zoom-box" onClick={handleLike}>
                🔥
            </span>
            <div>
                <input
                    className="create-big-input-field"
                    name="commentText"
                    type="text"
                    value={commentText}
                    placeholder="Comment the post"
                    onChange={handleCommentChange}
                    required
                />
                <button onClick={handleAddComment}>Share your thoughts</button>
            </div>
        </div>
    )
}

export default Post
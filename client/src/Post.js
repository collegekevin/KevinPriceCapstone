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
                setCommentText('')
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

    //So... in rails console. Post.user.username gives me what I want in line 81... 
    //but it's not letting do post.user.username... how do I fix that?

    return (
        <div className="post-stlying">
            <p>Post from {post.username}</p>
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
            <br></br>
            <ul>
                {post.comments.map(com => <li>{`${com.user} : ${com.comment_text}`}</li>)}
            </ul>
        </div>
        //On line 101. Comment.last.user.username gives me what I want in rails console, but
        //com.user.username doesn't work there... but com.comment_text does...
    )
}

export default Post
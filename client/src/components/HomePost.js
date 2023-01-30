import { useState } from "react";
import { Link } from "react-router-dom";

function HomePost({ post, user }) {

    const [commentText, setCommentText] = useState('')
    const [totalLikes, setTotalLikes] = useState(post.total_likes)
    const [postComments, setPostComments] = useState([post.comments])

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
            .then((newLike) => {
                console.log(newLike)
                setTotalLikes(totalLikes => totalLikes + 1)
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
            .then((newComment) => {
                setCommentText('')
                console.log(newComment)
                setPostComments([...postComments, newComment])
            });
    }

    // function handleUserClick() {
    //     console.log(post.user)
    //     <Link to="/UserPage">{post.user.username}</Link>
    // }


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
    //but it's not letting do post.user.username... 

    console.log(user.id)
    //console.log(post.user.id)
    // console.log(userPageInfo)

    return (
        <div className="post-styling">
            <br></br>
            <p>Post from <Link to={`/users/${post.user.id}`}>{post.user.username}</Link></p>
            {/* <p onClick={handleUserClick}>From {post.user.username}</p> */}
            <img src={post.post_image} alt={"Pic issue"} />
            <h4 className="post-captions">{post.caption}</h4>
            <span className="zoom-box" onClick={handleLike}>
                🔥{totalLikes}
            </span>
            <div>
                {post.comments.map(com => <p className="comment-text" key={com.id}>{`${com.get_name} : ${com.comment_text}`}</p>)}
            </div>
            <div>
                <input
                    className="create-big-input-field"
                    name="commentText"
                    type="text"
                    value={commentText}
                    placeholder="Comment on this post"
                    onChange={handleCommentChange}
                    required
                />
                <br></br>
                <button onClick={handleAddComment}>Share your thoughts</button>
            </div>
        </div>
        //On line 101. Comment.last.user.username gives me what I want in rails console, but
        //com.user.username doesn't work there... but com.comment_text does...
    )
}

export default HomePost
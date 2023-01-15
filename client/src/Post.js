function Post({ post, user }) {

    console.log(post)

    const handleLike = () => {
        console.log("liked");
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
    };

    //I want to use the info from the fetch to post the username, not the user info passed down. I don't need that.

    return (
        <div className="post-stlying">
            <p>Post from {user.username}</p>
            <img src={post.post_image} alt={"Pic issue"} />
            <p>{post.caption}</p>
            <span class="zoom-box" onClick={handleLike}>
                🔥
            </span>
            <button>Any thoughts?</button>
        </div>
    )
}

export default Post
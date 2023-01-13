function Post({ post }) {

    console.log(post)

    return (
        <div className="post-stlying">
            <img src={post.post_image} alt={"Pic issue"} />
            <p>{post.caption}</p>
        </div>
    )
}

export default Post
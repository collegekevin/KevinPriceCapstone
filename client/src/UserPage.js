import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import DisplayAds from './DisplayAds'
import DisplayPosts from './DisplayPosts'
import CreatePost from './CreatePost'

function UserPage() {

    const { id } = useParams()
    const [userPageInfo, setUserPageInfo] = useState({})

    console.log(id)

    useEffect(() => {
        //GET to '/users/:id'
        fetch(`/users/${id}`)
            .then(res => {
                if (res.ok) {
                    res.json().then(data => {
                        console.log(data)
                        setUserPageInfo(data)
                    })
                }
            })
    }, [])


    function handleFollow() {
        //So I need access to both the person whose page it is and the person whose account 
        //I'm logged into.... and I'm havin issues with that.


        //So this is what I want, but at the moment, the users aren't lining up. I have to figure out why.
        const followObj = { follower: user.id, user_they_follow: userPageInfo.id };
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


}


// I don't want create post here. This is to look at somebody else's page. I want the
// option to follow this person.

//I'm going to want a ternary for the button that displays "Follow name" if unfollowed, but 
//switches to "You follow name" if followed... ideally

return (
    <div>
        <h2>{userPageInfo.username}</h2>
        <h4>{userPageInfo.bio}</h4>
        <h5>
            <button onClick={handleFollow}>Follow {userPageInfo.username}</button>
        </h5>
        {/* <CreatePost userPageInfo={userPageInfo} /> */}
        <DisplayPosts user={userPageInfo} />
        <DisplayAds user={userPageInfo} />
    </div>
)
}

export default UserPage

import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import DisplayUserAds from './DisplayUserAds'
import DisplayPosts from './DisplayPosts'

function UserPage({ user }) {

    let alreadyFollow = false
    //const [changeFollowButton, setChangeFollowButton] = useState(false)

    const { id } = useParams()
    const [userPageInfo, setUserPageInfo] = useState({})

    console.log(`${user.username} is viewing ${id}'s page.`)

    useEffect(() => {
        fetch(`/users/${id}`)
            .then(res => {
                if (res.ok) {
                    res.json().then(data => {
                        console.log(data)
                        setUserPageInfo(data)
                    })
                }
            })
    }, [id])


    if (userPageInfo.total_followers > 0) {
        userPageInfo.list_followers.forEach((fol) => {
            if (fol === user.username) {
                alreadyFollow = true
                console.log(alreadyFollow)
            }
        })
    }


    function handleFollow() {

        const followObj = { follower_id: user.id, user_they_follow_id: userPageInfo.id };
        console.log(followObj)

        const configFollowObject = {
            method: "POST",
            headers: {
                "content-type": "application/JSON",
            },
            body: JSON.stringify(followObj),
        };

        console.log(followObj)


        fetch("/createfollow", configFollowObject)
            .then((resp) => resp.json())
            .then((createFollowReturn) => {
                console.log(createFollowReturn)
            });

    }

    return (
        <div>
            <p className="create-acc-link"><Link to="/home">Back to Homepage</Link></p>
            <DisplayUserAds user={user} />
            <div className='center-stuff'>
                <h2>{userPageInfo.first_name} {userPageInfo.last_name}</h2>
                <img
                    className="user-avatar"
                    src={userPageInfo.user_image}
                    alt={user.username}
                />
                <h4>{userPageInfo.bio}</h4>
                <h5>
                    {alreadyFollow ? <button> You Follow {userPageInfo.username}</button>
                        : <button onClick={handleFollow}>Follow {userPageInfo.username}</button>}
                </h5>
            </div>
            {/* <CreatePost userPageInfo={userPageInfo} /> */}
            <DisplayPosts user={user} userPageInfo={userPageInfo} />
            <DisplayUserAds user={user} userPageInfo={userPageInfo} />
        </div>
    )
}

export default UserPage

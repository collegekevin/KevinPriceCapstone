import React from 'react'
import { useState, useEffect } from "react"

function DisplayFollows({ user }) {

    const [totalFollowers, setTotalFollowers] = useState(0)
    const [showFollowers, setShowFollowers] = useState(true)
    const [showWhoYouFollow, setShowWhoYouFollow] = useState(true)

    console.log(user.list_followers)

    function handleFollowersClick() {
        setShowFollowers(showFollowers => !showFollowers)
    }

    function handleYouFollowClick() {
        setShowWhoYouFollow(showWhoYouFollow => !showWhoYouFollow)
    }

    // useEffect(() => {
    //     //GET to '/users/:id'
    //     fetch(`/users/${id}`)
    //         .then(res => {
    //             if (res.ok) {
    //                 res.json().then(data => {
    //                     console.log(data)
    //                     setUserPageInfo(data)
    //                 })
    //             }
    //         })
    // }, [id])

    return (
        <div >
            <div onClick={handleFollowersClick} >
                {showFollowers ? <p className="follower-info">You have {user.total_followers} followers</p>
                    : <p className="follower-info">{user.list_followers.toString()} follow you</p>}
                {/* : user.list_followers.map(single_follower => <FollowersFormat single_follower={single_follower} user={user} />)} */}
            </div>
            <div onClick={handleYouFollowClick}>
                {showWhoYouFollow ? <p className="follower-info" >You follow {user.total_users_you_follow} accounts</p>
                    : <p className="follower-info">You follow {user.list_users_you_follow.toString()}</p>}
            </div>
        </div>
    )
}

export default DisplayFollows

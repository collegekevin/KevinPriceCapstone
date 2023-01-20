import React from 'react'
import { useState, useEffect } from "react"

function DisplayFollows({ user }) {

    const [totalFollowers, setTotalFollowers] = useState(0)
    const [showFollowers, setShowFollowers] = useState(false)
    const [showWhoYouFollow, setShowWhoYouFollow] = useState(false)

    console.log(user.list_followers)

    function handleFollowersClick() {
        setShowFollowers(showFollowers => !showFollowers)
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
        <div>
            <div onClick={handleFollowersClick}>
                <p>You have {user.total_followers} followers</p>
                <p>{user.list_followers} are folling you</p>
            </div>
            <p>You follow {user.total_users_you_follow} accounts</p>
            <p>{user.list_users_you_follow} follow you</p>

        </div>
    )
}

export default DisplayFollows

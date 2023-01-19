import React from 'react'
import { useState, useEffect } from "react"

function DisplayFollows({ user }) {

    const [totalFollowers, setTotalFollowers] = useState(0)

    console.log(user.users_they_follow)

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

        </div>
    )
}

export default DisplayFollows

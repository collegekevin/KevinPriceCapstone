import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import DisplayAds from './DisplayAds'
import DisplayPosts from './DisplayPosts'

function UserPage() {

    const { id } = useParams()
    const [userPageInfo, setUserPageInfo] = useState({})


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

    return (
        <div>
            <h2>{userPageInfo.username}</h2>
            <h4>{userPageInfo.bio}</h4>
            <DisplayPosts user={userPageInfo} />
            <DisplayAds user={userPageInfo} />
        </div>
    )
}

export default UserPage

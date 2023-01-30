import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import DisplayAds from "./DisplayAds"

function LoggedOut({ user, setUser }) {

    const [userGoodbye, setUserGoodbye] = useState({})

    useEffect(() => {
        //GET to '/users/:id'
        fetch(`/users/${user.id}`)
            .then(res => {
                if (res.ok) {
                    res.json().then(data => {
                        console.log(data)
                        setUserGoodbye(data)
                    })
                }
            })
    }, [])

    // Below I want to implement a delete so the ad_clicks are tracked individually for each login
    // I'm sure in a real world scenario you'd want both single session clicks and to keep track of all clicks

    // useEffect(() => {
    //     fetch("/clearadclicks", {
    //        method: "DELETE",
    //     })
    //     console.log("ad clicks deleted")
    // }, [])  

    console.log(userGoodbye.ads)

    //I could put a ternary in the next bit and have it show the interactions if there were any and a 
    //seperate message saying if they interact it raises more money if there weren't any

    return (
        <div>
            <h2 className="ad-at-logout">Thanks for stopping by!</h2>
            {!user.total_ad_clicks ? <div>
                <h2 className="ad-at-logout"> {user.username}, you interacted with ads for the following companies today:</h2>
                <div>{user.ads.map(ad => <h1 className="ad-at-logout">{ad.company}</h1>)}</div>
                <h2 className="ad-at-logout">If you ever want to buy something from them, do it from here</h2>
                <h2 className="ad-at-logout">and you will help raise EVEN MORE money for awesome charities!</h2>
            </div> : <h2 className="ad-at-logout">Next time, feel free to interact with some ads to raise EVEN MORE money for awesome charities!</h2>}
            <h5 className="create-btl-link"> <Link to="/">Click here to sign in</Link></h5>
            <DisplayAds user={user} />
        </div>
    )
}

export default LoggedOut
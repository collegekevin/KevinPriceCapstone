import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

function LoggedOut({ user }) {

    const [userGoodbye, setUserGoodbye] = useState({})

    useEffect(() => {
        //GET to '/users/:id'
        fetch(`/users/logout/${user.id}`)
            .then(res => {
                if (res.ok) {
                    res.json().then(data => {
                        console.log(data)
                        setUserGoodbye(data)
                    })
                }
            })
    }, [])

    console.log(user.ads)

    return (
        <div>
            <h2 className="ad-at-logout">Thanks for stopping by, {user.username}!</h2>
            <h2 className="ad-at-logout">You interacted with ads for the following companies today:</h2>
            {user.ads.map(ad => <h1 className="ad-at-logout">{ad.company}</h1>)}
            <h2 className="ad-at-logout">If you ever want to buy something from them, do it from here</h2>
            <h2 className="ad-at-logout">and you will help raise even MORE money for awesome charities!</h2>
            <p className="create-btl-link"> <Link to="/CreateUser">Click here to sign in</Link></p>
        </div>
    )
}

export default LoggedOut
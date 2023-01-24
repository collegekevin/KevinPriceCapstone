import { useEffect, useState } from "react"
import UserAd from "./UserAd"

function DisplayUserAds({ user }) {

    const [ads, setAds] = useState([])

    useEffect(() => {
        fetch("/ads")
            .then((resp) => resp.json())
            .then((ads) => setAds(ads))
    }, [])

    console.log(ads)

    // function handleAdClick(ad) {
    //     const postObj = { ad_id: ad.id, user_id: user.id };
    //     console.log(postObj)

    //     const configObject = {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/JSON",
    //         },
    //         body: JSON.stringify(postObj),
    //     };

    //     fetch("/createadclick", configObject)
    //         .then((r) => r.json())
    //         .then((adClickReturn) => {
    //             console.log(adClickReturn)
    //         });
    // }

    return (
        <div>
            <h3 className="ad-into">The companies below will donate MORE money to charity if you interact with them.</h3>
            <div className="ad-styling">
                {ads.map(ad => <UserAd key={ad.id} ad={ad} user={user} />)}
            </div>
        </div>
    )
}


export default DisplayUserAds
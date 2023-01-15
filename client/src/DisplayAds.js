import { useEffect, useState } from "react"
import Ad from "./Ad"

function DisplayAds({ user }) {

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
            {ads.map(ad => <Ad ad={ad} user={user} />)}
        </div>
    )
}


export default DisplayAds
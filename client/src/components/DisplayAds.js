import { useEffect, useState } from "react"
import Ad from "./Ad"

function DisplayAds() {

    const [ads, setAds] = useState([])
    let shuffledAds = []

    useEffect(() => {
        fetch("/ads")
            .then((resp) => resp.json())
            .then((ads) => setAds(ads))
    }, [])

    // Math.floor(Math.random() * request.data.results.length - 1)
    shuffledAds = ads
    console.log(ads)

    shuffledAds = shuffledAds.sort(() => Math.random() - 0.5)
    console.log(shuffledAds)
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
            <h3 className="ad-intro">The companies below will donate MORE money to charity if you interact with them.</h3>
            <div className="ad-styling">
                {shuffledAds.map(ad => <Ad key={ad.id} ad={ad} />)}
            </div>
        </div>
    )
}


export default DisplayAds
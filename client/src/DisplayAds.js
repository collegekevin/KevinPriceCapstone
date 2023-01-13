import { useEffect, useState } from "react"
import Ad from "./Ad"

function DisplayAds() {

    const [ads, setAds] = useState([])

    useEffect(() => {
        fetch("/ads")
            .then((resp) => resp.json())
            .then(console.log(ads))
    }, [])

    return (
        <div>
            {ads.map(ad => <Ad ad={ad} />)}
        </div>
    )
}


export default DisplayAds
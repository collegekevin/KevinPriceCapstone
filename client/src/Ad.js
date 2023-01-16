
function Ad({ ad, user }) {

    console.log(ad)

    //this function should only run when clicked... but it runs every time the Ad function runs
    function handleAdClick() {
        const postObj = { ad_id: ad.id, user_id: user.id };
        console.log(postObj)

        const configObject = {
            method: "POST",
            headers: {
                "content-type": "application/JSON",
            },
            body: JSON.stringify(postObj),
        };

        fetch("/createadclick", configObject)
            .then((r) => r.json())
            .then((adClickReturn) => {
                console.log(adClickReturn)
            });
    }

    return (
        <div className="ad-stlying" onClick={handleAdClick}>
            <h3>{ad.company}</h3>
            <p>{ad.ad_text}</p>
            <img src={ad.ad_image} alt={ad.company} />
            <p class="zoom-box">Click the ad for details</p>
        </div>
    )
}

export default Ad
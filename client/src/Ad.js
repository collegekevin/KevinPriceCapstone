
function Ad({ ad }) {

    console.log(ad)

    return (
        <div className="ad-stlying">
            <h3>{ad.company}</h3>
            <p>{ad.ad_text}</p>
            <img src={ad.ad_image} alt={ad.company} />
        </div>
    )
}

export default Ad
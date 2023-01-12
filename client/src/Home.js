import { useState, useEffect } from "react";

function Home({ user }) {

    return (
        <div className='home-page'>
            <h1 className='greeting'>Hey {user.first_name}, thanks for being here!</h1>
            <br />
            <h3 className='subheading'>You're helping to raise money for amazing charities</h3>
            <h3 className='subheading'>and the world just got better because of you.</h3>
            {/* <UserTrips user={user} parks={parks} checkedActivities={checkedActivities}/> */}
            <br />
            <h3 className='subheading'>Provided I can get this to work</h3>
            <p id="click-details">｛ <em>Which is questionable at this point</em> ｝</p>
            {/* <NattyParks parks={parks} user={user}/> */}
        </div>
    );
}

export default Home;
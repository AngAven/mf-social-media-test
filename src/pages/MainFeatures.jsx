import React from 'react'

import '../styles/pages/MainFeatures.scss'

const MainFeatures = () => {
return (
    <div className="mainfeatures">
        <section className='cards-container'>
            <div class='card'><h1>Networks</h1>
            <img id="imgnetwroks" src='/img/networks.jpg'></img>
            <p>
                Sync your profile with available social media
            </p>
            <button claasName="gradient">GO </button></div>
            <div class='card'><h1>Statistics</h1>
            <img id="imgstats" src='/img/stats.jpg'></img>
            <p> Check your statistics</p>
            <button>GO </button></div>
            <div class='card'><h1>Tracker</h1>
            <img id="imgtracker" src='/img/tracker.jpg'></img>
            <p>Make a tracking of your job applications</p>
            <button> GO </button></div>




        </section>

    </div>
)
}

export default MainFeatures
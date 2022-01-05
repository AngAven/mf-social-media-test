import React from 'react'

import '../styles/pages/MainFeatures.scss'
import Header from '../components/Header/Header'
import { Link } from 'react-router-dom';

import networks from '@img/networks.jpg';
import stats from '@img/stats.jpg';
import tracker from '@img/tracker.jpg';

function handleClick() {
    history.push("/home");
}


const MainFeatures = () => {
    return (
        <div>
            <Header onClickLogin={handleClick} onClickSignup={handleClick} isLogged />

            <div className="mainfeatures">
                <section className='cards-container'>
                    <div className='card'><h1>Networks</h1>
                        <img id="imgnetwroks" src={networks}></img>
                        <p>
                            Sync your profile with available social media
                        </p>
                        <Link to="/connect-social">
                            <button className="gradient">
                                GO
                            </button>
                        </Link></div>

                    <div className='card'><h1>Statistics</h1>
                        <img id="imgstats" src={stats}></img>
                        <p> Check your statistics</p>
                        <button>GO </button></div>
                    <div className='card'><h1>Tracker</h1>
                        <img id="imgtracker" src={tracker}></img>
                        <p>Make a tracking of your job applications</p>
                        <button> GO </button></div>
                </section>
            </div>
        </div>
    )
}

export default MainFeatures
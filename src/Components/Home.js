import React from 'react'
import Collection from './Collection'
import GetApp from './GetApp'
import Head from './Head'
import Local from './Local'
import TypeFood from './TypeFood'
import '../Styles/Home.css'
import Explore from './Explore'
import Footer from './Footer'

function Home() {
    return (
        <>
            <Head />
            <div className="main-section">
                <div >
                    <TypeFood />
                </div>
                <div >
                    <Collection />
                </div>
                <div >
                    <Local />

                </div>
            </div>
            <div className="getApp-section">
                <div className="getApp--main-section">

                    <GetApp />
                </div>
            </div>
            <div className="main-section">
                <Explore />
                <Footer />
            </div>




        </>
    )
}

export default Home

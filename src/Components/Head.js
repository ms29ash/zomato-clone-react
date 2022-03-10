import React from 'react'
import Search from './Search'
import '../Styles/Head.css'

function Head() {
    return (
        <div className="top">
            <div className="top-content">
                <div className="navbar"></div>
                <div className="top-logo">
                    <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="zomato logo" />
                </div>
                <div className="top-headline">Discover the best food & drinks in Pithoragarh</div>
                <Search />
            </div>
        </div>
    )
}

export default Head

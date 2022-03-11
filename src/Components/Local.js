import React from 'react'
import '../Styles/Local.css'
import LocalCard from './LocalCard'

function Local() {
    return (
        <div className="local">
            <h1 className="local-title">Popular localities in and around Delhi NCR</h1>
            <div className="local-grid">
                <LocalCard place="Sector 29" places="289" />
                <LocalCard place="Sector 29" places="289" />
                <LocalCard place="Sector 29" places="289" />
                <LocalCard place="Sector 29" places="289" />
                <LocalCard place="Sector 29" places="289" />
                <LocalCard place="Sector 29" places="289" />
                <LocalCard place="Sector 29" places="289" />
                <LocalCard place="Sector 29" places="289" />
                <LocalCard place="Sector 29" places="289" />
                <LocalCard place="Sector 29" places="289" />
                <LocalCard place="Sector 29" places="289" />

            </div>
        </div>
    )
}

export default Local

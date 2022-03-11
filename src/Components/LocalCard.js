import React from 'react'
import '../Styles/LocalCard.css'

function LocalCard(props) {
    return (
        <>
            <a href="/" className="local-link">
                <div className="localCard">

                    <div className="local-card-text">
                        <p>
                            {props.place}
                        </p>
                        <p>
                            ({props.places} places)
                        </p>
                    </div>
                    <div>
                        &#x203A;
                    </div>

                </div>
            </a>
        </>
    )
}

export default LocalCard

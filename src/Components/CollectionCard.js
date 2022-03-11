import React from 'react'
import '../Styles/CollectionCard.css'

function CollectionCard(props) {
    return (
        <div className="collection-card">
            <div>
                <img src={props.img} alt="" />
            </div>
            <div className="collection-card-text">
                <p>{props.title}</p>
                <div className="collection-card-subtext">
                    <p>{props.subtext} Places</p>
                    <i className="sc-rbbb40-1 iFnyeo sc-hnEmYr dRCoUu" color="#FFFFFF" size="12"><svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="12" height="12" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 ezrcri"><title>right-triangle</title><path d="M5 0.42l10 10-10 10v-20z"></path></svg></i>
                </div>

            </div>
        </div>
    )
}

export default CollectionCard;

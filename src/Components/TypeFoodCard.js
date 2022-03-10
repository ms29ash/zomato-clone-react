import React from 'react'
import "../Styles/TypeFoodCard.css"

function TypeFoodCard(props) {
    return (
        <div className="type-food-container-card">
            <a href="/" className="card-link">
                <div>
                    <img className="img-card-food-type" src={props.image} alt="" />
                </div>
                <div>
                    <p className="card-food-text">{props.title}</p>
                </div>
            </a>
        </div>
    )
}

export default TypeFoodCard

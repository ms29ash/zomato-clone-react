import React from 'react'
import '../Styles/Deliver.css'

function Deliver(props) {
    const { title, list } = props

    return (
        <>
            <div className="deliver--container">
                <div className='deliver--container-head'>
                    <h1>{props.title}</h1>
                </div>
                <div className="explore--delivery-container">

                    {list?.map((e) => {


                        return <a href="/" key={e.name}>{e.name}</a>


                    })}
                    <a href="/" className="see-more-cities">See more</a>


                </div>

            </div>
        </>
    )
}

export default Deliver

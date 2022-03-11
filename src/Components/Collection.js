import React from 'react'
import CollectionCard from './CollectionCard'
import '../Styles/Collection.css'

function Collection() {
    return (
        <div className="collection" >
            <h1>Collections</h1>
            <div className="collection-container">
                <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</p>
                <a href="/">
                    <p>All collections in Pithoragarh</p>
                    <i className="sc-rbbb40-1 iFnyeo sc-hnEmYr dRCoUu" color="#FF7E8B" size="12"><svg xmlns="http://www.w3.org/2000/svg" fill="#FF7E8B" width="12" height="12" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 ezrcri"><title>right-triangle</title><path d="M5 0.42l10 10-10 10v-20z"></path></svg></i>
                </a>
            </div>
            <div className="collection-cards">
                <CollectionCard title="Newly Opened" subtext="13" img="https://b.zmtcdn.com/data/collections/01c4e61b30650bc816b5f627aefa0464_1646986437.jpg?output-format=webp" />
                <CollectionCard title="Trending This Week" subtext="30" img="https://b.zmtcdn.com/data/collections/f60eb469dbcdadaaa48c8be4f5ba48b3_1646040101.png?output-format=webp" />
                <CollectionCard title="Best of Pithoragarh" subtext="15" img="https://b.zmtcdn.com/data/collections/c392056cfd7c02befe8d53f94ad2a908_1581933619.jpg?output-format=webp" />
                <CollectionCard title="Great Cafes" subtext="10" img="https://b.zmtcdn.com/data/collections/821a4a7a6a0f8c265f5bf804cf18dfa3_1631714127.jpg?output-format=webp" />

            </div>
        </div>
    )
}

export default Collection

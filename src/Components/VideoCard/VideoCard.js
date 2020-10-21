import React from 'react'
import "./VideoCard.css"
import Avatar from "@material-ui/core/Avatar"

function VideoCard({ title, thumbnail, channelImage, channel, timeStamp, views}) {
    return (
        <div className="videoCard">
            <img className="videoCard__thumbnail" src={ thumbnail } alt={ title }/>
            <div className="videoCard__info">
                <Avatar className="videoCard__avatar" src={ channelImage } alt={ channel} />
           
                <div className="videoCard__text">
                    <h4>{ title }</h4>
                    <p>{ channel }</p>
                    <p>
                        { views } . { timeStamp }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard

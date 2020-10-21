import React from 'react'
import "./ChannelRow.css"
import Avatar from "@material-ui/core/Avatar"
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

function ChannelRow({ image, channel, verified, subs, nov, desc }) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" src={image} alt=""/>
            <div className="channelRow__text">
                <h4>{ channel } { verified && <CheckCircleOutlineOutlinedIcon className="channelRow__verified"/> }</h4>
                <p>{subs} . Subscribers { nov } videos</p>
                <p>{ desc }</p>
            </div>
        </div>
    )
}

export default ChannelRow

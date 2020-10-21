import React from 'react'
import "./SearchPage.css"
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from "../ChannelRow/ChannelRow";
import VideoCard from "../VideoCard/VideoCard"

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr/>
            
            <ChannelRow 
                image="https://cdn.pixabay.com/photo/2017/07/03/20/17/abstract-2468874_1280.jpg"
                channel="Coding With Amal"  
                verified
                subs="1B"
                nov={ 502}
                desc=" Best coding video tutorials...."
            />
            <hr/>
            <div className="sarchPage__videoCards">
                <VideoCard  
                    title="How to build a YouTune clone with React" 
                    thumbnail="https://cdn.pixabay.com/photo/2017/07/03/20/17/abstract-2468874_1280.jpg" 
                    channelImage="" 
                    channel="Coding With Amal" 
                    timeStamp="2 days ago" 
                    views="1.7B views" 
                />
                <VideoCard  
                    title="How to build a YouTune clone with React" 
                    thumbnail="https://cdn.pixabay.com/photo/2017/07/03/20/17/abstract-2468874_1280.jpg" 
                    channelImage="" 
                    channel="Coding With Amal" 
                    timeStamp="2 days ago" 
                    views="1.7B views" 
                />
                <VideoCard  
                    title="How to build a YouTune clone with React" 
                    thumbnail="https://cdn.pixabay.com/photo/2017/07/03/20/17/abstract-2468874_1280.jpg" 
                    channelImage="" 
                    channel="Coding With Amal" 
                    timeStamp="2 days ago" 
                    views="1.7B views" 
                />
                <VideoCard  
                    title="How to build a YouTune clone with React" 
                    thumbnail="https://cdn.pixabay.com/photo/2017/07/03/20/17/abstract-2468874_1280.jpg" 
                    channelImage="" 
                    channel="Coding With Amal" 
                    timeStamp="2 days ago" 
                    views="1.7B views" 
                />
                <VideoCard  
                    title="How to build a YouTune clone with React" 
                    thumbnail="https://cdn.pixabay.com/photo/2017/07/03/20/17/abstract-2468874_1280.jpg" 
                    channelImage="" 
                    channel="Coding With Amal" 
                    timeStamp="2 days ago" 
                    views="1.7B views" 
                />

                <VideoCard  
                    title="How to build a YouTune clone with React" 
                    thumbnail="https://cdn.pixabay.com/photo/2017/07/03/20/17/abstract-2468874_1280.jpg" 
                    channelImage="" 
                    channel="Coding With Amal" 
                    timeStamp="2 days ago" 
                    views="1.7B views" 
                />
            </div>
        </div>
    )
}

export default SearchPage

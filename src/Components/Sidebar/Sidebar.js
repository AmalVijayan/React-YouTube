import React from 'react'
import "./Sidebar.css"
import SidebarOption from "../SidebarOption/SidebarOption"
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';
import SubscriptionsSharpIcon from '@material-ui/icons/SubscriptionsSharp';
import VideoLibrarySharpIcon from '@material-ui/icons/VideoLibrarySharp';
import HistorySharpIcon from '@material-ui/icons/HistorySharp';
import OndemandVideoSharpIcon from '@material-ui/icons/OndemandVideoSharp';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TheatersSharpIcon from '@material-ui/icons/TheatersSharp';
import SportsEsportsSharpIcon from '@material-ui/icons/SportsEsportsSharp';
import WifiTetheringSharpIcon from '@material-ui/icons/WifiTetheringSharp';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarOption selected title="Home" Icon={HomeSharpIcon} />
            <SidebarOption title="Trending" Icon={WhatshotSharpIcon} />
            <SidebarOption title="Subscriptions" Icon={SubscriptionsSharpIcon} />
            <br/>
            <hr/>
            <SidebarOption title="Library" Icon={VideoLibrarySharpIcon} />
            <SidebarOption title="History" Icon={HistorySharpIcon} />
            <SidebarOption title="Your videos" Icon={OndemandVideoSharpIcon} />
            <SidebarOption title="Watch later" Icon={WatchLaterOutlinedIcon} />
            <SidebarOption title="Liked videos" Icon={ThumbUpIcon} />
            {/* <br/>
            <hr/>
            <h4 className='sidebar__sec'>SUBSCRIPTIONS</h4> */}
            <br/>
            <hr/>
            <h4 className='sidebar__sec'>MORE FROM YOUTUBE</h4>
            <SidebarOption title="YouTube Premium" Icon={YouTubeIcon} />
            <SidebarOption title="Movies" Icon={TheatersSharpIcon} />
            <SidebarOption title="Gaming" Icon={SportsEsportsSharpIcon} />
            <SidebarOption title="Live" Icon={WifiTetheringSharpIcon} />
            <SidebarOption title="Learning" Icon={EmojiObjectsOutlinedIcon} />

            <br/>
            <hr/>
            <SidebarOption title="Settings" Icon={SettingsIcon} />
            <SidebarOption title="Report history" Icon={FlagIcon} />
            <SidebarOption title="Help" Icon={HelpIcon} />
            <SidebarOption title="Send feedback" Icon={FeedbackIcon} />
            <br/>
            <hr/>


        </div>
    )
}

export default Sidebar

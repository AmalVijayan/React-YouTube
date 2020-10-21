import React, { useState } from 'react'
import "./Header.css";
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import {Avatar} from "@material-ui/core"
import { Tooltip } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
    const [inputSearch, setinputSearch] = useState("")
    return (
        <div className="header">
            <div className="header__d1">
                <MenuSharpIcon className="header__icon"/>
                <Link to="/"> 
                    <img 
                    className="header__logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png" 
                    alt="" 
                    />
                </Link>
            </div>
            <div className="header__d2">
                <input onChange={ e => setinputSearch(e.target.value)} value={ inputSearch } placeholder="   Search" type="text"/>
                <Link to={`/search/${inputSearch}`}>
                    <SearchSharpIcon className="searchIcon" />
                </Link>
            </div>
            <div className="header__d3">
                <Tooltip title="Create">
                    <VideoCallSharpIcon className="header__icon"/>
                </Tooltip>
                <Tooltip title="YouTube Apps">
                    <AppsSharpIcon className="header__icon"/>
                </Tooltip>
                <Tooltip title="Notification" >
                    <NotificationsSharpIcon className="header__icon"/>
                </Tooltip>
                <Avatar src="" alt="" className="avatar__icon"/>
            </div>
        </div>
    )
}

export default Header

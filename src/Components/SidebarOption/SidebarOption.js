import React from 'react'
import "./SidebarOption.css"

function SidebarOption({ selected, Icon, title}) {
    return (
        <div className={`sidebarOption ${ selected && "selected"}`}>
            { Icon && <Icon className="sidebarOption__icon" />}
            { Icon?  <p>{ title }</p> : <p>{ title }</p>}
        </div>
    )
}

export default SidebarOption

import React from "react"
import { useLocation } from "react-router-dom"
import "./TopNav.css"


function NavItem(props) {

    const location = useLocation()
    const navItemClass = `navitem ${props.item.href === location.pathname ? "active" : ""}`
    return <div className={navItemClass}><a href={props.item.href}>{props.item.title}</a></div>
}

export default NavItem
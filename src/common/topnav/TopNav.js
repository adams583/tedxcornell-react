import React from "react";
import NavItem from "./ NavItem";
import "./TopNav.css"

function TopNav(props) {
    const navItems = [
        {title:"Home", href:"/"},
        {title:"About", href:"/about"},
        {title:"Events", href:"/events"},
        {title:"Apply", href:"/apply"},
        {title:"FAQ", href:"/faq"}
    ]

    return <div id="topnav">
        <div className="nav-links-container">
            {navItems.map((navItem) => 
                <NavItem item={navItem}></NavItem>
            )}
        </div>
    </div>;
}

export default TopNav;

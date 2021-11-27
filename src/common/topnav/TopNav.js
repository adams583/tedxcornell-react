import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Nav from "react-bootstrap/Nav"
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"
import logo from "../../img/HomeLogo.png"
import "./TopNav.css";


function TopNav(props) {
    const navItems = [
        { title: "Home", href: "/" },
        { title: "Speakers", href: "/events" },
        { title: "Events", href: "/events" },
        { title: "Our Story", href: "/team" },
        { title: "Apply", href: "/apply" },
        { title: "FAQ", href: "/faq" }
    ]

    return <Navbar bg="dark" variant="dark" expand="lg">
        <Container >
            <Navbar.Brand href="/" style={{ width: "40%" }} className="">
                <Image className="pt-1" id="logo" src={logo} alt="Image not rendering" fluid></Image>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ">
                <Nav className="pr-3 ">
                    {navItems.map(navItem =>
                        <Nav.Link className="px-3 text-white" href={navItem.href}>{navItem.title}</Nav.Link>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

}

export default TopNav;

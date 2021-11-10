import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"


function TopNav(props) {
    const navItems = [
        { title: "Home", href: "/" },
        { title: "Meet The Speakers", href: "/about" },
        { title: "Events", href: "/events" },
        {title: "Our Story", href: "/"},
        { title: "Apply", href: "/apply" },
        { title: "FAQ", href: "/faq" }
    ]

    return <Navbar bg="dark" variant="dark" >
        <Container style = {{ maxWidth: '95%'}}>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="justify-content-end">
                {navItems.map(navItem =>
                    <Nav.Link className = "px-3 text-white" href={navItem.href}>{navItem.title}</Nav.Link>
                )}
                <Button variant="danger">Register</Button>

            </Nav>
        </Container>
    </Navbar>
}

export default TopNav;

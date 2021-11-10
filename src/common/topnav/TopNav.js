import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from "react-bootstrap/Nav"
import NavItem from "./ NavItem";
// import "./TopNav.css"
import CustomButton from "../buttons/CustomButton";


function TopNav(props) {
    const navItems = [
        { title: "Home", href: "/" },
        { title: "About", href: "/about" },
        { title: "Events", href: "/events" },
        { title: "Apply", href: "/apply" },
        { title: "FAQ", href: "/faq" }
    ]

    return <Navbar bg="dark" variant="dark" >
        <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
}

export default TopNav;

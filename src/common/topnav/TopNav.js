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
        { title: "Our Story", href: "/" },
        { title: "Apply", href: "/apply" },
        { title: "FAQ", href: "/faq" }
    ]

    return <Navbar bg="dark" variant="dark" expand="lg">
        <Container style={{ maxWidth: '95%' }}>
            <Navbar.Brand href="#home">TEDxCornell</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="pr-3">
                    {navItems.map(navItem =>
                        <Nav.Link className="px-3 text-white" href={navItem.href}>{navItem.title}</Nav.Link>
                    )}
                </Nav>
                <Button variant="danger" className="pl-3">Register</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>


    // <Navbar bg="dark" variant="dark" >
    //     <Container fluid style={{ maxWidth: '95%' }}>
    //         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    //         <Navbar.Toggle aria-controls="navbar-collapse" />
    //         <Navbar.Collapse id="navbar-collapse" className='border'>
    //             <Nav className="me-auto border" navbarScroll>
    //                 {navItems.map(navItem =>
    //                     <Nav.Link className="px-3 text-white" href={navItem.href}>{navItem.title}</Nav.Link>
    //                 )}
    //                 <Button variant="danger">Register</Button>
    //             </Nav>
    //         </Navbar.Collapse>
    //     </Container>
    // </Navbar>
}

export default TopNav;

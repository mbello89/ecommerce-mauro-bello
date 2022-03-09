import React from 'react';
import {Navbar,NavDropdown,Nav,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/logoVagon.png';
import {FaShoppingCart} from 'react-icons/fa';


function Bar() {
    return (
        <Navbar bg="light" expand="md">
            <Container>
            <Navbar.Brand href="#home">
                <img
                alt=""
                src={logo}
                width="45"
                height="45"
                className="d-inline-block align-top"
                />{' '}
            </Navbar.Brand>
            <Navbar.Brand href="#home">Un Vagon de Ideas</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>                
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto container justify-content-end">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Nosotros</Nav.Link>
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Home & Deco</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Kids</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Kitchen</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#home">
                        <FaShoppingCart size={22}/>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Bar;
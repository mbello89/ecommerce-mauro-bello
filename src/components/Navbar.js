import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/logoVagon.png';
import CartWidget from './CartWidget';
import './Navbar.css';


function Navbarr() {
    return (
        <Navbar className='NavbarItems' expand="md">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt="Logo"
                    src={logo}
                    width="45"
                    height="45"
                    className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Brand href="#home">Un Vagon de Ideas</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>                
                <Navbar.Collapse id="basic-navbar-nav" className='mt-0'>
                    <Nav className=" container justify-content-end">
                        <Nav.Link className='nav-links' href="#home">Home</Nav.Link>
                        <Nav.Link className='nav-links' href="#link">Nosotros</Nav.Link>
                        <Nav.Link className='nav-links' href="#link">Productos</Nav.Link>
                        <Nav.Link className='nav-links' href="#link">Contactanos</Nav.Link>
                        <Nav.Link className='nav-links' href="#home">
                            <CartWidget/>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbarr;
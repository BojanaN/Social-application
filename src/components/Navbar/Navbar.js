import React from 'react';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const navbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>Contact App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/" activeClassName="active-link" className="nav-link" style={{ textDecoration: 'none' }} exact><span>Home</span></NavLink>
                    <NavLink to="/contacts" activeClassName="active-link" className="nav-link" style={{ textDecoration: 'none' }}><span>Contacts</span></NavLink>
                    <NavLink to="/blog" activeClassName="active-link" className="nav-link" style={{ textDecoration: 'none' }}><span>Blog</span></NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default navbar;
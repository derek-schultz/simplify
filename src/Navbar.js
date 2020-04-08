import React from 'react';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import { LinkContainer } from "react-router-bootstrap";

export default class Navbar extends React.Component {
    render() {
        return (
            <BootstrapNavbar bg="dark" variant="dark">
                <BootstrapNavbar.Brand>Simplify</BootstrapNavbar.Brand>
                <BootstrapNavbar.Collapse className='justify-content-between'>
                    <Nav>
                        <LinkContainer to="/playlists">
                            <Nav.Link>Playlists</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/search">
                            <Nav.Link>Search</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/timer">
                            <Nav.Link>Timer</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <BootstrapNavbar.Text>
                        {this.props.user ? this.props.user.display_name : null}
                    </BootstrapNavbar.Text>
                </BootstrapNavbar.Collapse>
            </BootstrapNavbar>
        );        
    }
}
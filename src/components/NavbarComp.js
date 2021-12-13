import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav, Container} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { FaBell, FaHome } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'


import Home from './Home';
import CustomSettings from './CustomSettings';
import Settings from './Settings';
import Notification from './Notification';

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="dark" variant={"dark"} expand="lg">
                            <Navbar.Brand href="#" className='padding-brand'>Projekt22</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                            <Nav
                                    
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                            >
                                
                                <Nav.Link as={Link} to="/home" ><FaHome className="icons"/></Nav.Link>
                            </Nav>    
                            <Form className="d-flex mx-auto">
                                    <FormControl
                                        type="search"
                                        placeholder="Suchen..."
                                        className="me-2"
                                        aria-label="Search"
                                        style={{maxWidth:'1000px'}}
                                        style={{minWidth:'160%'}}
                                    />
                                    <Button variant="outline-success">Suchen</Button>
                            </Form>
                                <Nav
                                    className="ms-auto "
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link as={Link} to="/settings"><FaBell className="icons"/></Nav.Link>
                                    <NavDropdown title={<FiSettings className="icons"/>} id="navbarScrollingDropdown" className="btn-group dropstart nav-padding" >
                                        <NavDropdown.Item as={Link} to="/custom-settings" className='nav-padding'>Kontoeinstellungen</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/general-settings">Benutzerverwaltung</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Ausloggen
                                        </NavDropdown.Item>
                                    </NavDropdown>

                                </Nav>
                                
                            </Navbar.Collapse>

                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/settings">
                            <Settings />
                        </Route>
                        <Route path="/custom-settings">
                            <CustomSettings />
                        </Route>
                        <Route path="/notification">
                            <Notification />
                        </Route>
                    </Switch>
                </div>
            </Router>

        );
    }
    
}

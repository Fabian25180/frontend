import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav, Container } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

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
                        <Container fluid-left>
                            <Navbar.Brand href="#">Projekt22</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                            <Container fluid>
                                <Nav
                                    className=" ml- my-2 my-lg-0 "
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link as={Link} to="/home" >Home</Nav.Link>
                                </Nav>   
                            </Container>
                            <Container fluid class="mx-auto w-35 p-3" >
                            <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                        
                                    />
                                    <Button variant="outline-success">Search</Button>
                            </Form>
                            </Container>
                            <Container fluid-right>
                                <Nav>
                                    <Nav.Link as={Link} to="/settings">Settings</Nav.Link>
                                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                                <NavDropdown.Item as={Link} to="/custom-settings">Custom-Settings</NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/notification" >Notification</NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item href="#action5">
                                                    Something else here
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                    <Nav.Link href="#" disabled>Link</Nav.Link>
                                    <Nav.Link as={Link} to="/notifications">notifications</Nav.Link>
                                </Nav>
                            </Container>                 
                            </Navbar.Collapse>
                        </Container>
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

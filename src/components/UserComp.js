import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav, Container} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default class UserComp extends Component {
    render() {
        return (
            <div>
                <h2>Benutzerübersicht</h2>

                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Benutzername</th>
                                        <th scope="col">E-Mail</th>
                                        <th scope="col">Rechte 1</th>
                                        <th scope="col">Rechte 2</th>
                                        <th scope="col">Rechte 3</th>
                                        <th scope="col">Rechte 4</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Fabian Bartik</td>
                                        <td>fabsen@fabsen.de</td>
                                        <td>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck1" checked></input>
                                                <label class="custom-control-label" for="customCheck1">1</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck2" checked></input>
                                                <label class="custom-control-label" for="customCheck1">2</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck3" checked></input>
                                                <label class="custom-control-label" for="customCheck1">3</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck4"></input>
                                                <label class="custom-control-label" for="customCheck3">4</label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Janis Göhreng</td>
                                        <td>Janis@Göhreng.de</td>
                                        <td>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck1" checked></input>
                                                <label class="custom-control-label" for="customCheck1">1</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck2" checked></input>
                                                <label class="custom-control-label" for="customCheck1">2</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck3" checked></input>
                                                <label class="custom-control-label" for="customCheck1">3</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck4" checked></input>
                                                <label class="custom-control-label" for="customCheck1">4</label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Justin Voss</td>
                                        <td>juestin@voss.de</td>
                                        <td>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck1" checked></input>
                                                <label class="custom-control-label" for="customCheck1">1</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck2" checked></input>
                                                <label class="custom-control-label" for="customCheck1">2</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck3" checked></input>
                                                <label class="custom-control-label" for="customCheck1">3</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck4" checked></input>
                                                <label class="custom-control-label" for="customCheck1">4</label>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
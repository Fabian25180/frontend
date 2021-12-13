import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <div className="App">
            <form>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Email/Username</label>
                    <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com"></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword" placeholder="Password"></input>
                    </div>
                </div>
            </form>
        </div>
        )
    }
}






/*import React from "react";




function Login() {
    return (
        <div className="App">
            <form>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Email/Username</label>
                    <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com"></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword" placeholder="Password"></input>
                    </div>
                </div>
            </form>
        </div>
    );
}*/
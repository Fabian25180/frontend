import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown, Form, Button, FormControl } from 'react-bootstrap'
import NavbarComp from './components/NavbarComp';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <Register/>
  </div>
  );
}
//**************************************ROUTING****************************** *








export default App;

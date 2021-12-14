import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown, Form, Button, FormControl } from 'react-bootstrap'
import NavbarComp from './components/NavbarComp';
import Register from './components/Register';
import TableOverview from './components/TableOverview';
import UserComp from './components/UserComp';
import { useState } from 'react'
import Settings from './components/Settings';

function App() {

  //Platzhalter für DB Übersicht bis wir Daten bekommen
  // die ids und texte müssen wir dann über einen JSON string oder so ähnlich genereieren und einfach useState als array übergeben
  const[Dbs, setDBs] = useState([
    {
        id: 1,
        text: 'SAP',
        state: 'verfügbar',
    },
    {
        id: 2,
        text: 'MPDV',
        state: 'nicht verfügbar',
    }
  ])

  return (
    <div className="App">
      <NavbarComp/>
      <Register/>
      <TableOverview Dbs={Dbs}/>
      <UserComp/>
  </div>
  );
}
//**************************************ROUTING****************************** *








export default App;

import React from 'react';
import { Nav, Navbar} from "reactstrap"; 

function NavBarMain() {
    return (
      <Navbar>
      <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">gitLords</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>

      );
  }
  
  export default NavBarMain;
  
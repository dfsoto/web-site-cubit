import './Menu.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Nav, Navbar} from 'react-bootstrap';

function Menu() {
  return (
    <div className="Menu">
     <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container">
          <div class="row item-options">
            <div className="col-8 align-name">
              <a className="navbar-brand fw-bold name-user" href="#">PROGRAMADOR: DANIEL <span className="text-primary">SOTO OLARTE</span>.</a>
            </div>
            <div className="col-4 col-half-offset">
              <Navbar collapseOnSelect className="navbar-nav mx-auto order-0"  expand="lg">
                <Navbar.Toggle />
                <Navbar.Collapse>
                  <Nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                    <Nav.Item className="items-nav">
                      <Nav.Link eventKey="1" as={Link} to="/" className="text-buttons btn btn-sm btn btn-warning">
                        Inicio
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="items-nav">
                      <Nav.Link eventKey="2" as={Link} to="/users" className="text-buttons btn btn-sm btn btn-warning">
                        Usuarios
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="items-nav">
                      <Nav.Link eventKey="3" as={Link} to="/questions" className="text-buttons btn btn-sm btn btn-warning">
                        Preguntas
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;

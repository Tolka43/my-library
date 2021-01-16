import { Navbar, Nav } from 'react-bootstrap';

const AppNavbar = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Biblioteka</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#favorites">Ulubione</Nav.Link>
        <Nav.Link href="#settings">Ustawienia</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">zaloguj się</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default AppNavbar;

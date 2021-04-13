import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppNavbar = () => (
  <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
    <Link className='home-link m-2' to='/'>
      Biblioteka
    </Link>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    <Navbar.Collapse id='responsive-navbar-nav'>
      <Nav className='mr-auto'>
        <Link className='link m-2' to='/favorites'>
          Ulubione
        </Link>
        <Link className='link m-2' to='/settings'>
          Ustawienia
        </Link>
      </Nav>
      <Nav>
        <Link className='link ml-2' to='/login'>
          zaloguj się
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default AppNavbar;

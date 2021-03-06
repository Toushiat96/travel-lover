import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';
import Logo from '../../Image/Logo.png'
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <Navbar bg="none">
                <Navbar.Brand href="#home" style={{ marginLeft: '140px' }}>

                    <img style={{ width: '100px', color: 'white', filter: 'contrast(0%) brightness(500%)' }}
                        src={Logo}

                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand >

                <Form inline style={{ marginLeft: '70px', weight: '70px' }}>
                    <FormControl type="text" placeholder="Search Your  Destination" className="mr-sm-2" />

                </Form>
                <Nav className="nav" >
                    <Nav.Link to="/news" style={{ marginLeft: '45px', color: 'white', fontWeight: '600', fontFamily: 'Montserrat' }} href="#home">News</Nav.Link>
                    <Nav.Link to="/destination" style={{ marginLeft: '50px', color: 'white', fontWeight: '600', fontFamily: 'Montserrat' }} href="#features">Destination</Nav.Link>
                    <Nav.Link to="/blog" style={{ marginLeft: '50px', color: 'white', fontWeight: '600', fontFamily: 'Montserrat' }} href="#pricing">Blog</Nav.Link>
                    <Nav.Link to="/contact" style={{ marginLeft: '50px', color: 'white', fontWeight: '600', fontFamily: 'Montserrat' }} href="#features">Contact</Nav.Link>
                    <li>
                   
                    <Button style={{ marginLeft: '50px', width: '80px', height: '40px', borderRadius: '10px', fontWeight: '600' }} href="/login" variant="warning" >
                    Login </Button>
                    </li>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;
import React from 'react'
import {Container , Navbar , Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'


function navbar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" style={{width:'100%'}}>
    <Container>
    <Navbar.Brand href="/">Navbar</Navbar.Brand>
    <Nav className="me-auto">
     <Nav.Link className='navs'>  <Link to='/api/contact'>Contacts</Link></Nav.Link> 
     <Nav.Link className='navs'> <Link to='/api/contact/add'>Add contact</Link></Nav.Link> 
     
    </Nav>
    </Container>
  </Navbar>
  
        </div>
    )
}

export default navbar

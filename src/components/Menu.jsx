import React from 'react'

import { Navbar, Container, Nav } from "react-bootstrap"

const Menu = props => (
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Todo App</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Tarefas</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
)

export default Menu
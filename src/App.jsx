import React from "react"
import { Container } from "react-bootstrap"

import Menu from "./components/Menu"
import Task from "./views/Task";

const App = props => (
  <Container>
    <Menu/>
    <Task/>
  </Container>
)

export default App;

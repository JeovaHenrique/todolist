import React, { Component } from "react"

import { Form, Button, InputGroup } from "react-bootstrap"

export default class Formulario extends Component {

    constructor() {
        super()

        this.state = {
            id: 0,
            title: '',
        }
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(e) {
        this.setState({
            title: e.target.value,
            id: Math.random(),
        })
        console.log(this.state)
        
    }

    render() {

        return (
            <Form className="my-4" onSubmit={(event) => this.props.onCreate(event, this.state)}>
                <Form.Label htmlFor="tarefa">
                    <h1 className="px-5 m-4 ">Tarefas</h1>
                </Form.Label>
                <InputGroup>
                    <Form.Control
                        type="text"
                        id="tarefa"
                        aria-describedby="tarefa"
                        placeholder="Digite nova Tarefa"
                        value={this.state.title}
                        onChange={this.handleInput}
                    />
                    <Button
                        type="submit"
                        variant="outline-success mx-2 rounded-3"
                    >
                        <img src="https://img.icons8.com/stickers/30/000000/add.png" />
                    </Button>
                </InputGroup>
            </Form>
        )
    }
}
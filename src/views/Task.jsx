import React, { Component } from "react"
import CardTask from "../components/CardTarefa"

import Formulario from "../components/Formulario"



class Task extends Component {

    constructor() {
        super()
        this.state = {
            tasks: [],
        }
        this.createTask = this.createTask.bind(this)
        this.RemoveTask = this.RemoveTask.bind(this)
    }


    createTask(event, newTask) {
        event.preventDefault()
        this.setState({
            tasks: [...this.state.tasks, newTask]
        })
    }

    RemoveTask(id) {
        const {tasks} = this.state
        const updatedTask = tasks.filter((task) => task.id !== id)
        this.setState ({
            tasks: updatedTask,
        })
    }
    
    render() {

        return (
        <div>
            <Formulario onCreate={this.createTask}/>
            <hr />
            <div style={{ height: '80%' }} className="rounded border border-4 p-3"
            >
                
                {this.state.tasks.map((task) => (
                    <CardTask
                        key={task.id}
                        data={task}
                        onRemove = {this.RemoveTask}
                    />
                    ))}
            </div>
        </div>
        )
    }
}

export default Task

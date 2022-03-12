import React, { Component } from "react"

import { Button, InputGroup } from "react-bootstrap"

export default class CardTask extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        const {data, onRemove} = this.props

        return (
            <div className="d-flex align-items-center d-flex bd-highlight shadow p-3 mb-5 bg-body rounded" >
                <div className="p-2 flex-grow-1 bd-highlight">
                    <h3>{data.title}</h3>
                </div>
                <div className="d-flex justify-content-end my-1">
                    <InputGroup.Checkbox aria-label="Checkbox for following text input"  />
                    <Button variant="outline-danger me-2 rounded-3" type="button" onClick={e => onRemove(data.id)}>
                        <img src="https://img.icons8.com/flat-round/30/000000/delete-sign.png"/>
                    </Button>
                </div>

            </div>
        )
    }
}
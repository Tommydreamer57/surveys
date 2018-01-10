import React, { Component } from 'react';

const types = [
    "MC1",
    "MCM",
    "RS",
    "RB",
    "OC",
    "FR",
    "SEL"
]

class NewQuestion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: '',
            name: '',
            instructions: '',
            options: []
        }
    }
    handleChange = (target, value) => {
        this.setState({
            [target]: value
        })
    }
    render = () => {
        return (
            <div className="NewQuestion">
                New Question
                <select>
                    <option value="MC1" />
                </select>
                <input
                    type="text"
                    placeholder="type"
                    value={this.state.type}
                    onChange={e => this.handleChange('type', e.target.value)}
                />
                <input
                    type="text"
                    placeholder="name"
                    value={this.state.name}
                    onChange={e => this.handleChange('name', e.target.value)}
                />
                <input
                    type="text"
                    placeholder="instructions"
                    value={this.state.instructions}
                    onChange={e => this.handleChange('instructions', e.target.value)}
                />
                <button onClick={() => this.props.addQuestion(this.state)} >+ Create Question</button>
            </div>
        )
    }
}

export default NewQuestion

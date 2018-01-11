import React, { Component } from 'react';
import Options from '../../Survey/QuestionTile/Options/Options';

const types = [
    "MC1",
    "MCM",
    "RS",
    "RB",
    "OC",
    "SEL",
    "TXT",
    "FR"
]

const types_with_options = [

]

class NewQuestion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            new: true,
            type: 'MC1',
            name: '',
            instructions: '',
            options: [
                {
                    response: '' || 0 || [],
                    id: 0
                }
            ],
            min: 0,
            max: 10,
            maxLength: 140
        }
    }
    addOption = () => {
        let options = [
            ...this.state.options,
            {
                response: '',
                id: this.state.options.length
            }
        ]
        this.setState({
            options
        })
    }
    handleOptionChange = (id, target, value) => {
        let options = this.state.options.map(option => {
            if (option.id === id) {
                if (target === 'response' && this.state.type === "MCM") {

                }
                option[target] = value
            }
            return option
        })
        this.setState({
            options
        })
        return options // remove later
    }
    handleChange = (target, value) => {
        this.setState({
            [target]: value
        })
    }
    render = () => {
        let addOptions = false
        let specifyMinMax = false
        let specifyMaxLength = false
        switch (this.state.type) {
            case "MC1":
            case "MCM":
            case "OC":
            case "SEL":
                addOptions = true;
                break;
            case "RB":
                specifyMinMax = true;
                break;
            case "TXT":
                specifyMaxLength = true;
                break;
        }
        console.log(this.state.type)
        console.log(addOptions, specifyMinMax, specifyMaxLength)
        return (
            <div className="NewQuestion">
                New Question
                <select value={this.state.type} onChange={e => this.handleChange('type', e.target.value)} >
                    <option value="MC1" >Multiple Choice</option>
                    <option value="MCM" >Multiple Choice (multiple options)</option>
                    <option value="RS" >Rating / Stars</option>
                    <option value="RB" >Range / Bar</option>
                    {/* <option value="OC" >Order Choices</option> */}
                    <option value="TXT">Text (limited characters)</option>
                    <option value="FR" >Free Response (unlimited characters)</option>
                    <option value="SEL" >Select</option>
                </select>
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
                <Options question={this.state} handleOptionChange={this.handleOptionChange} />
                {
                    addOptions ?
                        <button onClick={this.addOption} >+ Add Option</button>
                        :
                        null
                }
                {
                    specifyMinMax ?
                        <div className="min-max-box">
                            <h6>Minimum Value</h6>
                            <input
                                type="number"
                                placeholder="Minimum Value"
                                value={this.state.min}
                                onChange={e => this.handleChange('min', e.target.value)}
                            />
                            <h6>Maximum Value</h6>
                            <input
                                type="number"
                                placeholder="Maximum Value"
                                value={this.state.max}
                                onChange={e => this.handleChange('max', e.target.value)}
                            />
                        </div>
                        :
                        null
                }
                {
                    specifyMaxLength ?
                        <input
                            type="number"
                            value={this.state.maxLength}
                            onChange={e => this.handleChange('maxLength', e.target.value)}
                        />
                        :
                        null
                }
                <button onClick={() => this.props.addQuestion(this.state)} >+ Create Question</button>
            </div>
        )
    }
}

export default NewQuestion

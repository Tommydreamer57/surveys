import React, { Component } from 'react';
import Option from './Option/Option';

function QuestionBody(props) {
    let { question } = props
    switch (question.type) {
        case "MC1":
            return (
                <div className="QuestionBody">
                    {
                        question.options.map(option => (
                            <div key={option.id} className="Option">
                                <h6 className="option-label">{option.label}</h6>
                                <input type="radio" value={question.response === option} />
                            </div>
                        ))
                    }
                </div>
            )
        case "MCM":
            return (
                <div className="QuestionBody">
                    {
                        question.options.map(option => (
                            <div key={option.id} className="Option">
                                <h6 className="option-label">{option.label}</h6>
                                <input type="checkbox" value={option.response.includes(option)} />
                            </div>
                        ))
                    }
                </div>
            )
        case "RS":
            return (
                <div className="QuestionBody">
                    {/* 
                        create five stars here
                        allow stars to be filled
                        maybe add input to input a specific value
                    */}
                </div>
            )
        case "RB":
            return (
                <div className="QuestionBody">
                    <input
                        type="range"
                        min={question.min}
                        max={question.max}
                        step={question.step}
                        value={question.response}
                    />
                </div>
            )
        case "OC":
            return (
                <div className="QuestionBody">
                    {
                        question.options.sort({/*sort by option order*/ }).map(option => (
                            <div className="OC-Option">
                                {option.label}
                            </div>
                        ))
                    }
                </div>
            )
        case "FR":
            return (
                <div className="QuestionBody">
                    <input
                        type="text"
                        value={question.response}
                    />
                </div>
            )
        case "SEL":
            return (
                <div className="QuestionBody">
                    <select>
                        {
                            question.options.map(option => (
                                <option />
                            ))
                        }
                    </select>
                </div>
            )
        // case "EM":  // Add HTML5 features after MVP
        //     return (
        //         <div className="QuestionBody">
        //             <input type="email" />
        //         </div>
        //     )
        default:
            return (
                <div className="QuestionBody">

                </div>
            )
    }
}

class QuestionTile extends Component {
    constructor(props) {
        super(props)
    }
    render = () => {
        let { question } = this.props
        return (
            <div className="QuestionTile">
                QuestionTile
                <h4>{question.name}</h4>
                <h5>{question.instructions}</h5>
                <QuestionBody question={question} />
                {/* {
                    question.options.map(option => (
                        <Option
                            option={option}
                            key={option.id}
                        />
                    ))
                } */}
            </div>
        )
    }
}

export default QuestionTile

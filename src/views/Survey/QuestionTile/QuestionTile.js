import React, { Component } from 'react';
// import Options from './Options/Options';
import MC1, { MCM, OC, SEL, RS, RB, TXT, FR } from '../../../components/question-types';

const Options = props => {
    switch (props.question.type) {
        case "MC1":
            return <MC1 question={props.question} />
        case "MCM":
            return <MCM question={props.question} />
        case "SEL":
            return <SEL question={props.question} />
        case "OC":
            return <OC question={props.question} />
        case "RS":
            return <RS question={props.question} />
        case "RB":
            return <RB question={props.question} />
        case "TXT":
            return <TXT question={props.question} />
        case "FR":
            return <FR question={props.question} />
        default:
            return null
    }
}

const QuestionTile = props => {
    return (
        <div className="QuestionTile">
            QuestionTile
                <h4>{props.question.name}</h4>
            <h5>{props.question.instructions}</h5>
            <Options question={props.question} />
        </div>
    )
}

export default QuestionTile

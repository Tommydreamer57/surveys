import React, { Component } from 'react';
// import Options from './Options/Options';
import MC1, { MCM, OC, SEL, RS, RB, TXT, FR } from '../../../components/options';

const Options = question => {
    switch (question.type) {
        case "MC1":
            return <MC1 question={question} />
        case "MCM":
            return <MCM question={question} />
        case "SEL":
            return <SEL question={question} />
        case "OC":
            return <OC question={question} />
        case "RS":
            return <RS question={question} />
        case "RB":
            return <RB question={question} />
        case "TXT":
            return <TXT question={question} />
        case "FR":
            return <FR question={question} />
        default:
            return null
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
                <Options question={question} />
            </div>
        )
    }
}

export default QuestionTile

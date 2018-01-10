import React, { Component } from 'react';
import Options from './Options/Options';

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

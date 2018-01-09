import React, { Component } from 'react';

class QuestionTile extends Component {
    constructor(props) {
        super(props)
    }
    render = () => {
        return (
            <div className="QuestionTile">
                QuestionTile
                {this.props.question.name}
                {this.props.question.instructions}
            </div>
        )
    }
}

export default QuestionTile

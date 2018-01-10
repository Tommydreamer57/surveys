import React, { Component } from 'react';
import axios from 'axios';
// import './Survey.css';
import QuestionTile from './QuestionTile/QuestionTile';

class Survey extends Component {
    constructor() {
        super()
        this.state = {
            survey: {
                questions: [
                    {
                        response: null
                    }
                ]
            }
        }
    }
    componentDidMount = () => {
        // console.log(this.props.match.params.id)
        axios.get(`http://localhost:3010/api/surveys/${this.props.match.params.id}`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    survey: response.data
                })
            })
    }
    render = () => {
        let { survey } = this.state
        return (
            <div className="Survey">
                <h1>{survey.title}</h1>
                <h2>{survey.description}</h2>
                {
                    survey.questions.map(question => (
                        <QuestionTile
                            question={question}
                            key={1000 + question.id}
                        />
                    ))
                }
                <h3>This survey was created by {survey.author}</h3>
            </div>
        )
    }
}

export default Survey

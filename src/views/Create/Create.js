import React, { Component } from 'react';
import axios from 'axios';
import QuestionTile from '../Survey/QuestionTile/QuestionTile';
import NewQuestion from './NewQuestion/NewQuestion';

class Create extends Component {
    constructor() {
        super()
        this.state = {
            questions: [],
            addingQuestion: true // change back to false later
        }
    }
    createQuestion = () => {
        this.setState({
            addingQuestion: true
        })
    }
    addQuestion = newQuestion => {
        delete newQuestion.new
        this.setState({
            questions: [...this.state.questions, newQuestion],
            addingQuestion: false
        })
    }
    render = () => {
        let { questions } = this.state
        console.log(questions)
        return (
            <div className="Create">
                <h1>Create a New Survey</h1>
                {
                    questions.map((question, i) => (
                        <QuestionTile
                            question={question}
                            key={1000 + i}
                        />
                    ))
                }
                {
                    this.state.addingQuestion ?
                        <NewQuestion addQuestion={this.addQuestion} />
                        :
                        <button onClick={this.createQuestion}>+ New Question</button>
                }
            </div>
        )
    }
}

export default Create

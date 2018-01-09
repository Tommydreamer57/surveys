import React, { Component } from 'react';
import axios from 'axios';
// import './Dashboard.css';
import SurveyTile from './SurveyTile/SurveyTile';

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            surveys: []
        }
    }
    componentDidMount = () => {
        axios.get(`http://localhost:3010/api/surveys`).then(response => {
            console.log(response.data)
            this.setState({
                surveys: response.data
            })
        })
    }
    render = () => {
        return (
            <div className="Dashboard">
                Dashboard
                {
                    this.state.surveys.map((survey, i) => (
                        <SurveyTile
                            survey={survey}
                            key={survey.id}
                        />
                    ))
                }
            </div>
        )
    }
}

export default Dashboard

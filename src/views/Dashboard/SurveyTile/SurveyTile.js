import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SurveyTile extends Component {
    constructor(props) {
        super(props)
    }
    render = () => {
        let { survey } = this.props
        return (
            <Link to={`/survey/${survey.id}`} className="SurveyTile">
                <h1>{survey.title}</h1>
                <h2>{survey.description}</h2>
                <h3>This survey was created by {survey.author}</h3>
            </Link>
        )
    }
}

export default SurveyTile

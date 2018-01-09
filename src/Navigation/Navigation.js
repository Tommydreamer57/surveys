import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render = () => {
        return (
            <div className="Navigation">
                Navigation
                <Link to="/">Dashboard</Link>
                <Link to="/create">+ Create</Link>
            </div>
        )
    }
}

export default Navigation

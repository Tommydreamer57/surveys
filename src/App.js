import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './views/Dashboard/Dashboard';
import Create from './views/Create/Create';
import Survey from './views/Survey/Survey';
import Results from './views/Results/Results';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/create" component={Create} />
            <Route path="/survey/:id" component={Survey} />
            <Route path="/results/:id" component={Results} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Dashboard from './views/Dashboard/Dashboard';
import Create from './views/Create/Create';
import Survey from './views/Survey/Survey';
import Results from './views/Results/Results';
import Navigation from './Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <MuiThemeProvider> */}
          <nav>
            <Navigation />
          </nav>
          <section className="content">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/create" component={Create} />
              <Route path="/survey/:id" component={Survey} />
              <Route path="/results/:id" component={Results} />
            </Switch>
          </section>
          {/* </MuiThemeProvider> */}
        </div>
      </Router>
    );
  }
}

export default App;

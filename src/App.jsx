import React from 'react';

import './App.css';
import 'mdbreact/dist/css/mdb.css';

// import component
import Login from './Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';
import Data from './Components/Data';
import {BrowserRouter as Router, Route } from 'react-router-dom'

export default class App extends React.Component{
  state = {

  }

  render(){
    return (
      <Router>
          <div className="App">
            <Route exact path="/find-jobs" component={Home} />
            <Route exact path="/" component={Home} />
            <Route exact path="/find-jobs/home" component={Home} />
            <Route exact path="/find-jobs/login" component={Login} />
            <Route exact path="/find-jobs/register" component={Register} />
            <Route exact path="/data" component={Data} />
          </div>
      </Router>
    );
  }
}
  

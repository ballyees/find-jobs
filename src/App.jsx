import React from 'react';

import './App.css';
import 'mdbreact/dist/css/mdb.css';

// import component
import Login from './Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';
import Data from './Components/Data';
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

export default class App extends React.Component{
  constructor(props){
    super(props)
    let isLogin = 0
    if(!localStorage.getItem('isLogin')){
      localStorage.setItem('isLogin', 0)
    }else{
      isLogin = parseInt(localStorage.getItem('isLogin'))
    }
    this.state = {
      loginSuccess: Boolean(isLogin)
    }
  }
  changeLogin = (e, remember) =>{
    this.setState({
      loginSuccess: e
    })
  }

  render(){
    return (
      <Router>
          <div className="App">
            <Route exact path="/find-jobs" render={(props) => <Home loginSuccess={this.state.loginSuccess} />} />
            <Route exact path="/" render={(props) => <Home loginSuccess={this.state.loginSuccess} />} />
            <Route exact path="/find-jobs/home" render={(props) => <Home loginSuccess={this.state.loginSuccess} />} />
            <Route exact path="/find-jobs/login" render={(props) => <Login loginSuccess={this.state.loginSuccess} callBack={this.changeLogin} />} />
            <Route exact path="/find-jobs/register" render={(props) => <Register loginSuccess={this.state.loginSuccess} />} />
            <Route exact path="/find-jobs/data" render={(props) => (!this.state.loginSuccess?(<Redirect to="/find-jobs/home" />):(<Data />))} />
          </div>
      </Router>
    );
  }
}
  

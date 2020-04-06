import React from 'react'
import { Link } from 'react-router-dom'
import './Login-From-Dark.css'
export default class Login extends React.Component{

    render(){
        return (
        <div className="login-dark">
            <form method="post" style={{backgroundColor: "#333333"}}>
                <h2 className="sr-only">Login Form</h2>
                <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>
                <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Email" /></div>
                <div className="form-group"><input className="form-control" type="password" name="password" placeholder="Password" /></div>
                <div className="form-group"><button className="btn btn-primary btn-block" type="submit" style={{backgroundColor: "#269d9d"}}>Log In</button></div>
                <Link to="/"><span className="forgot">Forgot your email or password?</span></Link>
            </form>
        </div>)
    }
}
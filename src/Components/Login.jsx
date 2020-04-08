import React from 'react'
import { Link } from 'react-router-dom'
import './Login-From-Dark.css'
import starSky from './img/n_star-sky.jpg'
import FindSVG from './img/find2.svg'

import { MDBInput } from "mdbreact";

export default class Login extends React.Component{
    
    state = {
        email: '',
        password: '',
        company: 0,
    }

    onChange = e => {
        const { name, value } = e.target
        console.log(name + " " + value)
        this.setState({
          [name]: value
        })
    }

    SubmitBtn = () => {
        console.log(this.state)
    }

    KeyPressEnter = e => {
        if(e.key === 'Enter'){
            this.SubmitBtn()
        }
    }

    render(){
        return (
            <div style={{backgroundImage: `url(${starSky})`, backgroundSize: "cover", position: "relative", height: "1000px", width: "100%"}}>
                <div className="container">
                    <div className="row justify-content-center" style={{paddingTop: "5%"}}>
                        <div className="col-md-9 col-lg-12 col-xl-6">
                            <div className="card shadow-lg o-hidden border-0 my-5">
                                <div className="card-body p-0">
                                    <div className="row">
                                        <div className="col-lg-6 col-lg-12">
                                            <div className="p-5">
                                                <div className="text-center">
                                                <Link to="/find-jobs/home"><img src={FindSVG} alt="Logo" style={{maxHeight: "40%", maxWidth: "30%"}} /></Link>
                                                    <h4 className="text-dark mb-4">Welcome to Find Jobs</h4>
                                                </div>
                                                <div className="user">
                                                    <div className="form-group">
                                                        <select className="browser-default custom-select" name="company" onChange={this.onChange}>
                                                            <option value="">Jobseeker</option>
                                                            <option value="1">Company</option>
                                                        </select>
                                                    </div>
                                                    <MDBInput label="Email Address" outline name="email" onChange={this.onChange} onKeyPress={this.KeyPressEnter} />
                                                    <MDBInput type="password" label="Password" outline name="password" onChange={this.onChange} onKeyPress={this.KeyPressEnter} />
                                                    {/* <div className="form-group"><input className="form-control form-control-user" type="input" id="username" aria-describedby="emailHelp" placeholder="Enter Username..." /></div>
                                                    <div className="form-group"><input className="form-control form-control-user" type="password" id="password" placeholder="Password" /></div> */}
                                                    <button className="btn btn-info btn-block text-white btn-user" id="submit-btn" type="submit" style={{borderRadius: "20px"}} onClick={this.SubmitBtn}>SIGN IN</button>
                                                    <hr />
                                                </div>
                                                <Link to="/find-jobs/home"><span className="forgot">Forgot your password?</span></Link>
                                                <hr />
                                                <span className="forgot">Don't have an account? </span><Link to="/find-jobs/register">Sign Up</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // render(){
    //     return (
    //     <div className="login-dark" style={{height: "1000px", background: `#475d62 url(${starSky}`, backgroundSize: "cover", position: "relative"}}>
    //         <form method="post" style={{backgroundColor: "#333333"}}>
    //             <h2 className="sr-only">Login Form</h2>
    //             {/* <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div> */}
    //             <div className="illustration"><i className="fa fa-lock"></i></div>
    //             <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Email" /></div>
    //             <div className="form-group"><input className="form-control" type="password" name="password" placeholder="Password" /></div>
    //             <div className="form-group"><button className="btn btn-primary btn-block" type="submit" style={{backgroundColor: "#269d9d"}}>Log In</button></div>
    //             <Link to="/"><span className="forgot">Forgot your email or password?</span></Link>
    //         </form>
    //     </div>)
    // }
}
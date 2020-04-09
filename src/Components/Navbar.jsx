import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MDBBtn } from "mdbreact";

import './Navbar.css'

export default class Navbar extends Component{
    constructor(props) {
        super(props);
        this.state = {
          menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
      }

      toggleMenu(){
        this.setState({ menu: !this.state.menu })
      }
    
    render(){
        const show = (this.state.menu) ? "show" : "";
        return (
            <div className="Navbar">
              <nav className="navbar sticky-top navbar-dark bg-dark navbar-expand-md navbar navbar-expand-lg fixed-top" id="mainNav">
                <div className="container">
                  <NavLink to="/find-jobs/home">
                    <span className="navbar-brand js-scroll-trigger" style={{paddingTop: 5}} >Find-Jobs</span>
                  </NavLink>
                  <button onClick={this.toggleMenu} className="navbar-toggler navbar-toggler-right" data-target="#navbarResponsive" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"
                        value="Menu"><i className="fa fa-bars"></i>
                  </button>
                    <div className={"collapse navbar-collapse " + show} id="navbarResponsive">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item nav-link js-scroll-trigger" role="presentation">
                              <Link to="/find-jobs/login"><span className="nav-link active js-scroll-trigger" style={{paddingTop: 18}} onClick={this.toggleMenu}>Sign in</span></Link>
                            </li>
                            <li className="nav-item nav-link js-scroll-trigger" role="presentation">
                            <Link to="/find-jobs/register" target="_blank"><MDBBtn type="button" style={{borderRadius: "20px"}} outline color="info" onClick={this.toggleMenu} >Sign Up</MDBBtn></Link>
                              {/* <Link to="/register"><button type="button" className="btn action-button btn-primary" style={{borderRadius: "20px"}} onClick={this.toggleMenu}>Sign Up</button></Link> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
          );
    }
}


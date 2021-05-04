import React, { Component } from 'react';
import logo from '../../../images/WorkIt.svg';
import {Link} from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light  ">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="Work It Up" width="120"/>
                </Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse pr-5" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                       
                        <li className="nav-item px-2">
                            <Link to="/ContactUs" className="nav-link">Contact Us</Link>
                            </li>
                        <li className="nav-item px-2">
                            <Link to="/SignUp"  className="nav-link up-btn-primary">Sign Up</Link>
                             </li>
                        <Link to="/SignIn" className="btn headerbtn btn-outline-dark px-3" role="button">Sign In</Link>
                    </ul>
                </div>
            </div>
        </nav>
)
    }
}
export default Navbar;
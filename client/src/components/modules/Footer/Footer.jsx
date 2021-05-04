import React, { Component } from 'react';
import logo from '../../../images/WorkIt-light.svg';

class Footer extends Component {
    render() {
        return (
            <div className="footer-dark ">
            <div className="container">
            <div className="row">
            <div className="col-md-6 item text">
            <img src={logo} class="img-fluid" alt="avatar"  width="200"/>
                </div>
                <div className="col-sm-6 col-md-3 item">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#">Find Job</a></li>
                        <li><a href="#">Find employee</a></li>
                    </ul>
                </div>
                <div className="col-sm-6 col-md-3 item">
                    <h3>About</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                    </ul>
                </div>
              

                <div className="col item social">
                    <a href="https://www.facebook.com/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                </div>
            </div>
            <div className="footer-copyright mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                           Work It  <script>document.write(new Date().getFullYear())</script> © All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
)
    }
}
export default Footer;
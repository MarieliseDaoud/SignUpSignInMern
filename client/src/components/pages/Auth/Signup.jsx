import React, { Component } from 'react';
import Footer from '../../modules/Footer/Footer';
import logo from '../../../images/WorkIt.svg';
import {Link} from 'react-router-dom';
 
 
class Signup extends Component {
    render() {
        return (
            <div className="wrapper">
      
        {
       <div  className="container">

       <div className="container">
       
       <div className="row justify-content-center registerimg">
       <Link to="/">
                            <img src={logo} alt="Work It Up" width="300"/>
                             </Link>
       
       </div>
       
       </div>
       
       
       <div className="container justify-content-center mt-5">
       
       <div className="row justify-content-center">
       
       <ul className="nav nav-tabs" role="tablist">
       <li className="nav-item">
           <a className="nav-link active" data-toggle="tab" href="#employee">Employee</a>
       </li>
       <li className="nav-item">
           <a className="nav-link" data-toggle="tab" href="#employer">Employer</a>
       </li>
       </ul>
       </div>
       
       <div className="container justify-content-center">
       <div className="row justify-content-center">
       <div className="tab-content">
       <div id="employee" className="container tab-pane active justify-content-center">
           <div className="container">
               <div className="row justify-content-center">
               <div className="col-md-6">
               <form className="form-register" method="post" action="Register.php">
                   <div className="form-group">
                       <div className="col-sm-12">
                           <input type="text" id="firstName" name="firstName" placeholder="First Name" className="form-control" required autofocus/>
                           <span className="error_hide" id="error_first_name">Should only contain letters</span>
                       </div>
                   </div>
                   <div className="form-group">
                       <div className="col-sm-12">
                           <input type="text" id="lastName" name="lastName" placeholder="Last Name" className="form-control" required autofocus/>
                           <span className="error_hide" id="error_last_name">Should only contain letters</span>
                       </div>
                   </div>
                   <div className="form-group">
                       <div className="col-sm-12">
                           <input type="email" id="email" placeholder="Email" className="form-control" name= "email"/>
                           <span className="error_hide" id="error_email">Invalid email format</span>
                       </div>
                   </div>
                   <div className="form-group">
                       <div className="col-sm-12">
                           <input type="date" id="DOB" className="form-control" name="DOB"/>
                           <span className="error_hide" id="error_date">Please choose a date</span>
                       </div>
                   </div>
       
                   <div className="form-group">
                       <div className="col-sm-12">
                       <label for="demo_overview_minimal">Select sector</label>
                       <select id="demo_overview_minimal" className="form-control" data-role="select-dropdown" data-profile="minimal">
                           <option value="Accountant">Accountant</option>
                           <option value="SalesExecutive">Sales Executive</option>
                           <option value="GraphicDesigner">Graphic Designer</option>
       
                       </select>
                       </div>
                   </div>
       
                   <div className="form-group">
                       <div className="col-sm-12">
                           <input type="text" id="phoneNumber" name="phoneNumber" required placeholder="Phone number" className="form-control"/>
                           <span className="error_hide" id="error_phone_number">Should only contain numbers and "+" sign</span>
                       </div>
                   </div>
       
                   <div className="form-group">
                       <div className="col-sm-12">
                           <input type="password" id="password" name="password" placeholder="Password" className="form-control"/>
                           <span className="error_hide" id="error_pass">Should be 8+ letters with a number and a special character</span>
                       </div>
                   </div>
                   <div className="form-group">
                       <div className="col-sm-12">
                           <input type="password" id="confPassword" placeholder="Confirm Password" className="form-control"/>
                           <span className="error_hide" id="error_conf_pass">Passwords do not match</span>
                       </div>
                   </div>
                   <div className="row justify-content-center">
                       <button id="submit" type="submit" className="btn loginbtn center mb-1 py-1 px-1 btn-block" >Register</button>
                   </div>
                   <div className="row justify-content-center">
                       <p>Already have an account?  <Link to="/SignIn">
                           Login
                             </Link></p>
                   </div>
               </form>
           </div>
       </div>
           </div>
       </div>
       <div id="employer" className="container tab-pane fade">
           <div className="container">
               <div className="row justify-content-center">
                   <div className="col-md-6">
                       <form className="form-register" method="post" action="Register.php">
                           <div className="form-group">
                               <div className="col-sm-12">
                                   <input type="text" id="firstName" name="firstName" placeholder="First Name" className="form-control" required autofocus/>
                                   <span className="error_hide" id="error_first_name">Should only contain letters</span>
                               </div>
                           </div>
                           <div className="form-group">
                               <div className="col-sm-12">
                                   <input type="text" id="lastName" name="lastName" placeholder="Last Name" className="form-control" required autofocus/>
                                   <span className="error_hide" id="error_last_name">Should only contain letters</span>
                               </div>
                           </div>
                           <div className="form-group">
                               <div className="col-sm-12">
                                   <input type="email" id="email" placeholder="Email" className="form-control" name= "email"/>
                                   <span className="error_hide" id="error_email">Invalid email format</span>
                               </div>
                           </div>
                           <div className="form-group">
                               <div className="col-sm-12">
                                   <input type="date" id="DOB" className="form-control" name="DOB"/>
                                   <span className="error_hide" id="error_date">Please enter your date of birth</span>
                               </div>
                           </div>
                           <div className="form-group">
                               <div className="col-sm-12">
                                   <input type="text" id="phoneNumber" name="phoneNumber" required placeholder="Phone number" className="form-control"/>
                                   <span className="error_hide" id="error_phone_number">Should only contain numbers and "+" sign</span>
                               </div>
                           </div>
       
                           <div className="form-group">
                               <div className="col-sm-12">
                                   <input type="password" id="password" name="password" placeholder="Password" className="form-control"/>
                                   <span className="error_hide" id="error_pass">Should be 8+ letters with a number and a special character</span>
                               </div>
                           </div>
                           <div className="form-group">
                               <div className="col-sm-12">
                                   <input type="password" id="confPassword" placeholder="Confirm Password" className="form-control"/>
                                   <span className="error_hide" id="error_conf_pass">Passwords do not match</span>
                               </div>
                           </div>
                           <div className="row justify-content-center">
                               <button id="submit" type="submit" className="btn loginbtn center mb-1 py-1 px-1 btn-block" >Register</button>
                           </div>
                           <div className="row justify-content-center">
                               <p>Already have an account? <a href="Login.php">Login </a></p>
                           </div>
                       </form>
                   </div>
               </div>
           </div>
       </div>
       
       </div>
       </div>
       </div>
       </div>
       </div>
       
       
    
        
        
      
    }<Footer />)</div>

        )}
}
export default Signup;


import React, { Component } from 'react';
import Footer from '../../modules/Footer/Footer';
import login from '../../../images/login.svg';
import logo from '../../../images/WorkIt.svg';
import {Link} from 'react-router-dom';
 
class Signin extends Component {
    render() {
        return (
            <div className="wrapper">
     
        {
                 <div className="row align-items-center justify-content-center ">
  
  
                 <div className="col-md-6 col-sm-12 mt-6 loginimg">
                     <img src={login}  className="img-fluid" alt="LOGIN"  width="600" />
                 </div>
     
                 <div className="col-md-6 col-sm-12">
     
                     <form className="form-horizontal" method="post" action="Login.php">
                         <div className="row justify-content-center">
                         <Link to="/">
                            <img src={logo} alt="Work It Up" width="300"/>
                             </Link>
                         </div>
                         <div className="form-group mt-4">
     
                             <div className="col-sm-12">
                                 <input type="email" id="email" placeholder="Email" className="form-control" name= "email" required/>
                             </div>
                         </div>
                         <div className="form-group">
     
                             <div className="col-sm-12">
                                 <input type="password" id="password" name="password" placeholder="Password" className="form-control" required/>
                                 <div className="row justify-content-center mt-1">
                                 <Link to="/Signup">Forgot Password</Link>
                                 </div>
                             </div>
                         </div>
                         <div className="row justify-content-center">
                             <button id="submit" type="submit" className="btn loginbtn center mb-1 py-1 px-1 btn-block" >Login</button>
                         </div>
                         <div className="row justify-content-center">
                             <p>Not a member?   <Link to="/SignUp">Sign Up</Link></p>
                         </div>
     
                     </form>
                 </div>
             </div>
     
   
   
    

        
      
    }<Footer />)</div>

        )}
}
export default Signin;


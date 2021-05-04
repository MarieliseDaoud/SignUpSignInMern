import React, { Component } from 'react';
import Footer from '../../modules/Footer/Footer';
import envelope from '../../../images/envelope.svg';
import {Link} from 'react-router-dom'
import Navbar from '../../modules/Navbar/Navbar';
 
class Contact extends Component {
    render() {
        return (
            <div className="wrapper">
        <Navbar />
        {
         <div class="container">

         <div className="container">
             <div className="row justify-content-center mt-5 mb-5">
                 <h1 className="subtitle">Get In Touch With Us</h1>
             </div>
     
             <div className="row text-center justify-content-center mb-5 ">
                 <div className="col-auto">
                     <div className="socialmedia">
                     <div className="col item social">
                         <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                         <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                         <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                         <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                     </div>
                 </div>
     
             </div>
             </div>
         </div>
     
  
         <div className="container mb-6 mt-1">
             <div className="row justify-content-center">
     
                 <div className="col-md-6 col-sm-12">
                     <div className="row justify-content-center">
                     <img src={envelope} className="img-fluid"  alt="ENVELOPE" width="300"/>
                     </div>
                </div>
     
                 <div className="col-md-6 col-sm-12">
     
                     <form className="form-submit" method="post" action="">
                         <div className="form-group">
     
                             <div className="col-sm-12">
                                 <input type="text" id="fullname" placeholder="Full Name" className="form-control" name= "fullname" required/>
                             </div>
     
                         </div>
                         <div className="form-group">
     
                             <div className="col-sm-12">
                                 <input type="email" id="email" placeholder="Email" className="form-control" name= "email" required/>
                             </div>
     
                         </div>
                         <div className="form-group">
     
                             <div className="col-sm-12">
                                 <input type="number" id="phone" placeholder="Phone Number" className="form-control" name= "phone" required/>
                             </div>
     
                         </div>
     
                         <div className="form-group">
     
                             <div className="col-sm-12">
                                 <textarea rows="7" id="message" placeholder="Your message" className="form-control" name="message" required></textarea>                        </div>
     
                         </div>
                         <div className="row justify-content-center">
                             <button id="submit" type="submit" className="btn loginbtn center mb-1 py-1 px-1 btn-block" >Submit</button>
                         </div>
     
                     </form>
                 </div>
             </div>
         </div>
     </div>
     
     





          
            
        

        
      
    }<Footer />)</div>

        )}
}
export default Contact;


import React, { Component } from 'react';
import Navbar from '../../modules/Navbar/Navbar';
import Footer from '../../modules/Footer/Footer';
import CoWorking from '../../../images/CoWorking.svg';
import {Link} from 'react-router-dom'
 
class Landing extends Component {
    render() {
        return (
            <div className="wrapper">
        <Navbar />
        {
          <div className="container mb-6 mt-1">
          <div className="row">
              <div className="col-md-6 col-sm-12 mt-5">
                  <h1 className="mb-5 title-header">A SPACE MADE FOR YOU</h1>
                  <a className="btn searchjobbtn btn-outline-dark mb-2 py-3 px-4" href="Jobs.php" role="button">SEARCH
                      JOBS</a>
                
                  <a className="btn postbtn mb-2 py-3 px-4" href="Register.php" role="button">POST A JOB</a>

              </div>
              <div className="col-md-6 col-sm-12 mt-5">
                  <img classNameName="img-fluid" src={CoWorking}  alt="A SPACE MADE FOR YOU"/>
                </div>
          
  

  <div className="container mb-6">
      <div className="row justify-content-center mt-5 mb-5">
          <h1 className="subtitle">Find what suits you</h1>
      </div>
      <div className="row text-center justify-content-center mb-5 ">
          <div className="col-auto">
              <button className="btn btn-industry btn-outline-dark mb-2 py-3 px-4">Accountant Jobs</button>
          </div>
          <div className="col-auto">
              <button className="btn btn-industry btn-outline-dark mb-2 py-3 px-4">Sales Executive Jobs</button>
          </div>
          <div className="col-auto">
              <button className="btn btn-industry btn-outline-dark mb-2 py-3 px-4">Graphic Designer Jobs</button>
          </div>
          <div className="col-auto">
              <button className="btn btn-industry btn-outline-dark mb-2 py-3 px-4">Software Engineering Jobs</button>
          </div>
          <div className="col-auto">
              <button className="btn btn-industry btn-outline-dark mb-2 py-3 px-4">Marketing Jobs</button>
          </div>
          <div className="col-auto">
              <button className="btn btn-industry btn-outline-dark mb-2 py-3 px-4">Finance Jobs</button>
          </div>
          <div className="col-auto">
              <button className="btn btn-industry btn-outline-dark mb-2 py-3 px-4">Human Resources Jobs</button>
          </div>
          <div className="col-auto">
              <button className="btn btn-industry btn-outline-dark mb-2 py-3 px-4">UI/UX Designer Jobs</button>
          </div>
          <div className="col-auto">
              <button className="btn btn-industry btn-outline-dark mb-2 py-3 px-4">Consultancy Jobs</button>
          </div>
          <div className="col-auto">
              <button className="btn btn-industry btn-outline-dark mb-2 py-3 px-4">Remote Jobs</button>
          </div>
          <div className="col-auto">
              <button className="btn btn-industry btn-outline-dark mb-2 py-3 px-4">Civil Engineering Jobs</button>
          </div>
          <div className="col-auto">
              <button className="btn btn-industry btn-outline-dark mb-2 py-3 px-4">Mechanical Engineering Jobs</button>
          </div>
          <div className="col-auto">
              <button className="btn btn-industry btn-outline-dark mb-2 py-3 px-4">Real Estate Jobs</button>
          </div>
          <div className="col-auto">
              <button className="btn btn-industry btn-outline-dark mb-2 py-3 px-4">Full Stack Developer Jobs</button>
          </div>

      </div>

  </div>

 
      <div className="container">
          <div id="job">
              <div className="row">
                  <div className="col-md-8 offset-md-2">
                      <div className="section-title">
                          <h2 className="text-center">How can I apply to a job?</h2>

                      </div>
                      <hr className="border-white mb-4 mt-4"/> 
                  </div>
              </div>

              <div className="row">
                  <div className="col-md-3">
                      <div className="work-process">
                          <i className="fas fa-file-alt"></i>
                          <h3><a href="Register.php">1-Register</a></h3>
                          <p>Fill your information and attach your CV</p>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="work-process">
                          <i className="fas fa-file-alt"></i>
                          <h3><a href="#">2-Search</a></h3>
                          <p>Depending on your indusrty, filter the job positions</p>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="work-process">
                          <i className="fas fa-file-alt"></i>
                          <h3><a href="#">3-Apply</a></h3>
                          <p>One click and you're one of the candidates</p>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="work-process">
                          <i className="fas fa-file-alt"></i>
                          <h3><a href="#">4-Be patient!</a></h3>
                          <p>Don't forget to check you email daily!</p>
                      </div>
                  </div>

              </div>
          </div>
          <div id="hire">
              <div className="row">
                  <div className="col-md-8 offset-md-2">
                      <div className="section-title">
                          <h2 className="text-center">How Can I find an employee?</h2>

                      </div>
                      <hr className="border-white mb-4 mt-4"/> 
                  </div>
              </div>

              <div className="row">
                  <div className="col-md-3">
                      <div className="work-process">
                          <i className="fas fa-file-alt"></i>
                          <h3><a href="#">1-Register</a></h3>
                          <p>Fill your company's information</p>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="work-process">
                          <i className="fas fa-file-alt"></i>
                          <h3><a href="#">2-Post</a></h3>
                          <p>Post a project or a job position at your company</p>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="work-process">
                          <i className="fas fa-file-alt"></i>
                          <h3><a href="#">3-Look for candidates</a></h3>
                          <p>Check all the candidates who applied</p>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="work-process">
                          <i className="fas fa-file-alt"></i>
                          <h3><a href="#">4-Contact</a></h3>
                          <p>Contact the best candidates then remove the post </p>
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
export default Landing;


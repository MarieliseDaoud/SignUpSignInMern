import React, { Component } from 'react';
 
import Navbar from '../../modules/Navbar/Navbar';
import Footer from '../../modules/Footer/Footer';
import avatar from '../../../images/Murex.jpg';
import {Link} from 'react-router-dom'
 
class Jobs extends Component {
    render() {
        return (
            <div className="wrapper">
        <Navbar />
        {
        <div className="container">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-4 col-sm-12 mt-4">
                    <input className="form-control me-2" type="search" placeholder="Job Title" aria-label="Search"/>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 mt-4">
                    <input className="form-control me-2" type="search" placeholder="Location" aria-label="Search"/>
                </div>
                <div className="col-lg-4 col-md-4 col-m-12 mt-4">
                    <button className="btn btn-outline-dark" type="submit">Search</button>
                </div>
    
            </div>
        </div>

        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="card filtercard mt-3 mb-2">
                        <h5 className="card-header bg-dark">
                                <span data-toggle="collapse" href="#collapseIndustry" role="button" aria-expanded="true"
                                      aria-controls="collapseIndustry">Industry</span>
                        </h5>
                        <div className="collapse" id="collapseIndustry">
                            <div className="options py-3 px-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Engineering
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Accounting
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Architecture
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Design
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Buisness
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card filtercard mt-3 mb-2">
                        <h5 className="card-header bg-dark">
                                <span data-toggle="collapse" href="#collapseTypes" role="button" aria-expanded="true"
                                      aria-controls="collapseTypes">Job Type</span>
                        </h5>
                        <div className="collapse" id="collapseTypes">
                            <div className="options py-3 px-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Full-time
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Contract
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Internship
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Part-time
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card filtercard mt-3 mb-2">
                        <h5 className="card-header bg-dark">
                                <span data-toggle="collapse" href="#collapseDate" role="button" aria-expanded="true"
                                      aria-controls="collapseDate">Date Posted</span>
                        </h5>
                        <div className="collapse" id="collapseDate">
                            <div className="options py-3 px-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Today
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Last Week
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Last Month
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card filtercard mt-3 mb-2">
                        <h5 className="card-header bg-dark">
                                <span data-toggle="collapse" href="#collapseExperience" role="button" aria-expanded="true"
                                      aria-controls="collapseExperience">Experience</span>
                        </h5>
                        <div className="collapse" id="collapseExperience">
                            <div className="options py-3 px-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Intern
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Entry-level
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Intermediate
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Mid-Level
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Senior
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
                <div className="col-lg-8 col-sm-12 col-md-8 mt-3 offset-md-1">
                    <div className="card py-1 px-1 mb-3">
                        <div className="row g-0">
                            <div className="col-md-2 col-sm-7 text-center align-self-center">
                                <img src={avatar} width="100" alt="avatar"/>
                            </div>
                            <div className="col-md-7 col-sm-7">
                                <div className="card-body">
                                    <h5 className="card-title">Senior UI/UX Designer </h5>
                                    <h6 className="card-text cardlocation"><i className='bx pr-2 bxs-map bx-xs'></i>Murex |
                                        Beirut,Lebanon</h6>
                                    <p className="card-text"></p>
                                    <p className="card-text"><small className="text-muted">Published 3 mins ago</small></p>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2 text-center align-self-center">
                                <a href="#" className="btn applybtn  py-2 px-3">Details</a>
                                <a href="#" className="btn btn-outline-dark py-2 px-3">Save</a>
                            </div>
                        </div>
                    </div>
                    <div className="card py-1 px-1 mb-3">
                        <div className="row g-0">
                            <div className="col-md-2 col-sm-7 text-center align-self-center">
                            <img src={avatar} width="100" alt="avatar"/>
                            </div>
                            <div className="col-md-7 col-sm-7">
                                <div className="card-body">
                                    <h5 className="card-title">Senior UI/UX Designer </h5>
                                    <h6 className="card-text cardlocation"><i className='bx pr-2 bxs-map bx-xs'></i>Murex |
                                        Beirut,Lebanon</h6>
                                    <p className="card-text"></p>
                                    <p className="card-text"><small className="text-muted">Published 3 mins ago</small></p>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2 text-center align-self-center">
                                <a href="#" className="btn applybtn  py-2 px-3">Details</a>
                                <a href="#" className="btn btn-outline-dark py-2 px-3">Save</a>
                            </div>
                        </div>
                    </div>
                    <div className="card py-1 px-1 mb-3">
                        <div className="row g-0">
                            <div className="col-md-2 col-sm-7 text-center align-self-center">
                            <img src={avatar} width="100" alt="avatar"/>
                            </div>
                            <div className="col-md-7 col-sm-7">
                                <div className="card-body">
                                    <h5 className="card-title">Senior UI/UX Designer </h5>
                                    <h6 className="card-text cardlocation"><i className='bx pr-2 bxs-map bx-xs'></i>Murex |
                                        Beirut,Lebanon</h6>
                                    <p className="card-text"></p>
                                    <p className="card-text"><small className="text-muted">Published 3 mins ago</small></p>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2 text-center align-self-center">
                                <a href="#" className="btn applybtn   py-2 px-3">Details</a>
                                <a href="#" className="btn btn-outline-dark py-2 px-3">Save</a>
                            </div>
                        </div>
                    </div>
                    <div className="card py-1 px-1 mb-3">
                        <div className="row g-0">
                            <div className="col-md-2 col-sm-7 text-center align-self-center">
                            <img src={avatar} width="100" alt="avatar"/>
                            </div>
                            <div className="col-md-7 col-sm-7">
                                <div className="card-body">
                                    <h5 className="card-title">Senior UI/UX Designer </h5>
                                    <h6 className="card-text cardlocation"><i className='bx pr-2 bxs-map bx-xs'></i>Murex |
                                        Beirut,Lebanon</h6>
                                    <p className="card-text"></p>
                                    <p className="card-text"><small className="text-muted">Published 3 mins ago</small></p>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2 text-center align-self-center">
                                <a href="#" className="btn applybtn  py-2 px-3">Details</a>
                                <a href="#" className="btn btn-outline-dark py-2 px-3">Save</a>
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
export default Jobs;


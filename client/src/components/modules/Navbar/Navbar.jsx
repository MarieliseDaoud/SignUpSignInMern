import React, { Component, useState, useEffect }from 'react';
import logo from '../../../images/WorkIt.svg';
import {Link} from 'react-router-dom';

import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode';
import useStyles from '../../pages/Auth/styles';
import * as actionType from '../../../constants/actionTypes';

const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
    
        history.push('/auth');
    
        setUser(null);
      };

   
    console.log(user);



    useEffect(()=>{
            const token = user?.token;

            setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])
        
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
                        {/* <Link to="/SignIn" className="btn headerbtn btn-outline-dark px-3" role="button">Sign In</Link> */}
                        <Link to="/Auth" className="btn headerbtn btn-outline-dark px-3" role="button">Employee</Link>
                        <Link to="/AuthEmployer" className="btn headerbtn btn-outline-dark px-3" role="button">Employer</Link>

                    </ul>
                </div>
            </div>
            <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            {/* <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button> */}
          </div>
        ) : (
            // <Link to="/auth" className="btn headerbtn btn-outline-dark px-3" role="button">Sign In</Link>
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
        </nav>
)
    
}
export default Navbar;
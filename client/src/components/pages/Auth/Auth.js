import React, { useState } from 'react';
import { configureStore } from '@reduxjs/toolkit'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input';
import { useHistory } from 'react-router-dom';
//import { decrement, increment } from '../../redux/demo/counter'
import { useDispatch } from 'react-redux';
import {signin,signup} from '../../../actions/auth'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', dob: '', phone: '' };


const Auth = () => {
  
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const history = useHistory();
  const [formData, setFormData]=useState(initialState);
  const dispatch = useDispatch();
  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleSubmit = (e) => {
    e.preventDefault();
console.log(formData);
    if (isSignup) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };

  const handleChange = (e) =>{
     setFormData({...formData, [e.target.name]: e.target.value })
  };

  const switchMode = () => {
    //setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };
    return (
      
      <Container component="main" maxWidth="xs">
    <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
        {
          isSignup && (
            <>

           
            <Input name="firstname" label="First Name" handleChange={handleChange} autoFocus/>
            <Input name="lastname" label="Last Name" handleChange={handleChange}/>
            <Input name="dob"  handleChange={handleChange}type="date"/>
          
{/*         
                       <select id="demo_overview_minimal" className="form-control" data-role="select-dropdown" data-profile="minimal" required>
                           <option value="Accountant">Accountant</option>
                           <option value="SalesExecutive">Sales Executive</option>
                           <option value="GraphicDesigner">Graphic Designer</option>     
                       </select> */}

                       <Input name="phone" label="Phone Number" handleChange={handleChange} type="number"/>
       
                      
                  
            </>
          )}
               <Input name="email" label="Email" handleChange={handleChange} type="email"/>
               <Input name="password" label="Password" handleChange={handleChange}  type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
               { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
               <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
          </Grid>
          </form>
        </Paper>
      </Container>
    );
}; 

export default Auth;

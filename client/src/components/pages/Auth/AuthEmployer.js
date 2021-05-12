// import React, { useState } from 'react';
// import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import useStyles from './styles';
// import Input from './Input';

// const Auth = () => {
//   const classes = useStyles();
//   const [showPassword, setShowPassword] = useState(false);
//   const [isSignupemployer, setIsSignup] = useState(false);


//   const handleShowPassword = () => setShowPassword(!showPassword);
//   const handleSubmit=() => {

//   };
//   const handleChange=() => {

//   };

//   const switchMode = () => {
//     //setForm(initialState);
//     setIsSignup((prevIsSignup) => !prevIsSignup);
//     setShowPassword(false);
//   };
//     return (
      
//       <Container component="main" maxWidth="xs">
//     <Paper className={classes.paper} elevation={3}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">{ isSignupemployer ? 'Sign up' : 'Sign in' }</Typography>
//         <form className={classes.form} onSubmit={handleSubmit}>
//           <Grid container spacing={2}>
//         {
//           isSignupemployer && (
//             <>

           
//             <Input name="firstname" label="First Name" handleChange={handleChange} autoFocus/>
//             <Input name="lastname" label="Last Name" handleChange={handleChange}/>
//             <Input name="dob"  handleChange={handleChange}type="date"/>
          

//                        <Input name="phone" label="Phone Number" handleChange={handleChange} type="number"/>
       
                      
                  
//             </>
//           )}
//                <Input name="email" label="Email" handleChange={handleChange} type="email"/>
//                <Input name="password" label="Password" handleChange={handleChange}  type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
//                { isSignupemployer && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
//                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
//             { isSignupemployer ? 'Sign Up' : 'Sign In' }
//           </Button>
//           <Grid container justify="flex-end">
//             <Grid item>
//               <Button onClick={switchMode}>
//                 { isSignupemployer ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
//               </Button>
//             </Grid>
//           </Grid>
//           </Grid>
//           </form>
//         </Paper>
//       </Container>
//     );
// }; 

// export default Auth;

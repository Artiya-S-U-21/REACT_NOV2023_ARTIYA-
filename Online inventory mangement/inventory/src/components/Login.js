import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';

const Login = () => {
    const paperstyle = { padding: 50, height: '55vh', width: 400, margin: '100px auto' };
    return (
        <div className='img' >
            <Grid container justifyContent="center">
                <Paper elevation={100} style={paperstyle}>
                    <Grid align='center'>
                        <Avatar style={{ color: 'rgb(231, 121, 17)' }}></Avatar>
                        <Typography>SignIn</Typography>
                    </Grid>
                    <TextField margin='normal'  label='email/Username' placeholder='Enter here' fullWidth required color='warning'/>
                <TextField margin='normal' type="password" label='Password'  placeholder='Enter Password' fullWidth required color='warning'/>
                <FormControlLabel
        control={
          <Checkbox name="checkedB" color='warning' />
               }
              label="Remember me"
               /><br></br>
               <Button type="submit" color='warning' variant='contained' fullWidth component={RouterLink} to="/Home">Log In</Button><br></br><br></br>
               <Typography>
                <Link href="#" style={{color:"rgb(231, 121, 17)"}}>Forget password?</Link><br></br>
                <Button type="submit" color='warning' variant='contained' fullWidth component={RouterLink} to="/SignUp">Dont have an account? SignUp</Button>
                </Typography>
            
        
                </Paper>
            </Grid>
        </div>
    );
};

export default Login;

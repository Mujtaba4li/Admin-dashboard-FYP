import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom'
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import loginimg from '../assets/images/logo.png'
import '../assets/css/myTailwind.css'


export default function Login() {
    const paperStyle = {
        padding: '35px 15px',
        margin: "50px auto",
        // height: '70vh',
        width: 280,
        borderRadius: 10,
        // backgroundColor:"grey"
    }
    return (
        <>

            <Grid vs={3}>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>

                        <Avatar alt="ShareClub" src={loginimg} sx={{ width: 80, height: 80 }}
                        />
                        {/* <img alt="Remy Sharp" sx={{ width: 6, height: 6px }} src= /> */}
                        <h1 style={{fontSize:'22px',fontFamily:"fantasy"}}>Admin login</h1>
                    </Grid>
                    <form>
                        <TextField id="username" style={{ marginTop: "10px" }} label="Username" placeholder='Enter username' variant="standard" fullWidth required/>
                        <TextField id="password" style={{ marginTop: "10px" }} type='password' label="Password" placeholder='Enter password' variant="standard" fullWidth required />

                        <FormGroup style={{ marginTop: "10px", fontSize: '1px' }}>
                            <FormControlLabel control={<Checkbox />} label="Remember me" />

                        </FormGroup>
                        <Link to='/dashboard'>
                            <Button variant="contained" className='bg-sky-800' style={{ marginTop: "20px" }} fullWidth>Login</Button>
                        </Link>
                        <Button variant="outlined" type='reset' style={{ marginTop: "10px" }} fullWidth>Cancel</Button>
                        {/* <p>Forgot password<a href="#">NOW?</a></p> */}
                    </form>
                </Paper>
            </Grid>

        </>
    )
}

import * as React from "react";

// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import loginimg from "../assets/images/logo.png";
import "../assets/css/myTailwind.css";
import { useState } from "react";

export default function Login() {
  const paperStyle = {
    padding: "35px 15px",
    margin: "50px auto",
    // height: '70vh',
    width: 280,
    borderRadius: 10,
    // backgroundColor:"grey"
  };

  // Authentication start
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function loginUser(event) {
      event.preventDefault()

      const response = await fetch('http://localhost:420/api/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              email,
              password,
          }),
      })

      const data = await response.json()

      if (data.user) {
          localStorage.setItem('token', data.user)
          alert('Login successful')
          window.location.href = '/dashboard'
      } else {
          alert('Please check your username and password')
      }
  }
  // Authentication END

  return (
    <>
      <Grid vs={3}>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar
              alt="ShareClub"
              src={loginimg}
              sx={{ width: 80, height: 80 }}
            />
            {/* <img alt="Remy Sharp" sx={{ width: 6, height: 6px }} src= /> */}
            <h1 style={{ fontSize: "22px", fontFamily: "fantasy" }}>
              Admin login
            </h1>
          </Grid>
          <form onSubmit={loginUser}>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              style={{ marginTop: "10px" }}
              label="Email"
              placeholder="Enter email"
              variant="standard"
              fullWidth
              type="email"
              required
            />
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              style={{ marginTop: "10px" }}
              type="password"
              label="Password"
              placeholder="Enter password"
              variant="standard"
              fullWidth
              required
            />

            <FormGroup style={{ marginTop: "10px", fontSize: "1px" }}>
              <FormControlLabel control={<Checkbox />} label="Remember me" />
            </FormGroup>
            {/* <Link to="/dashboard"> */}
            <Button
              type="submit"
              variant="contained"
              className="bg-sky-800"
              style={{ marginTop: "20px" }}
              fullWidth
            >
              Login
            </Button>
            {/* </Link> */}
            <Button
              variant="outlined"
              type="reset"
              style={{ marginTop: "10px" }}
              fullWidth
            >
              Cancel
            </Button>
            {/* <p>Forgot password<a href="#">NOW?</a></p> */}
          </form>
        </Paper>
      </Grid>
    </>
  );
}

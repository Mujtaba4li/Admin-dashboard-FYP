import React from "react";
import "./../../assets/css/myTailwind.css";
import { Box, Paper, Grid } from "@material-ui/core";
import "../../assets/css/myTailwind.css";
export default function Dashboard() {
  let curDate = new Date();
  // const weekDay=['Sunday','Monday','Tuesday','Thursday','Friday','Saturday']
  // let month=curDate.getMonth();
  // let day=weekDay[curDate.getDay()];
  // let date=curDate.getDate();
  curDate = curDate.getHours();
  let greeting = "";
  const clrGreeting = {};

  if (curDate >= 1 && curDate <= 12) {
    greeting = "Good Morning!";
    clrGreeting.color = "green";
  } else if (curDate >= 13 && curDate <= 17) {
    greeting = "Good Afternoon!";
    clrGreeting.color = "orange";
  } else if (curDate >= 18 && curDate <= 19) {
    greeting = "Good Evening!";
    clrGreeting.color = "grey";
  } else {
    clrGreeting.color = "black";
    greeting = "Good Night!";
  }

  // Day with date scene shuro
  const d = new Date();
  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "Jun",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = weekDay[d.getDay()];
  const month = months[d.getMonth()];
  const date = d.getDate();
  const year = d.getFullYear();

  return (
    <>
      <Box>
        {/* Line 1 */}
        <Paper className=" h-16">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div>
                <spain>{day}   </spain>
                <spain>{month}</spain>
                <spain> {date}, </spain>
                <spain>{year}</spain>
              </div>
              
              <h1>
                Hello Sir, <span style={clrGreeting}>{greeting}</span>{" "}
              </h1>
            </Grid>
            <Grid item xs={6}>
              worldfffffffffffffffffffffff
            </Grid>
          </Grid>
        </Paper>

        {/* Line 2 */}
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper>
              <div className=" m-5">Heelo world</div>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <div className=" m-5">Heelo world</div>
            </Paper>
          </Grid>
        </Grid>

        {/* Line 3 */}
        <Paper>
          <div className=" m-5">Graph</div>
        </Paper>
      </Box>
    </>
  );
}

import React from "react";
import { Box, Paper, Grid } from "@material-ui/core";
import "../../assets/css/myTailwind.css";
export default function Dashboard() {
  return (
    <>
      <Box>
      {/* Line 1 */}
        <Paper className=" h-16">
          <div className=" m-5">Heelo world</div>
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

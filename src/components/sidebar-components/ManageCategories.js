import React from "react";
import { Box, TextField, Button } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import "../../assets/css/myTailwind.css";

export default function ManageCategories() {
  return (
    <>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          variant="outlined"
          size="small"
          label="Enter name of Category"
          id="fullWidth"
        />
        <Button className=" left-3 " variant="contained" size="medium">
          Add Category
        </Button>

        <h1 className=" mt-4">Categories</h1>

        {/* Table start */}
      

        {/* Table END */}
      </Box>
    </>
  );
}

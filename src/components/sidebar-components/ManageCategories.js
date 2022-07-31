import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../../assets/css/myTailwind.css";
import "../../assets/css/style.css";

import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";

import { actionCreatorsCategory } from "../../actions/index";
import { addCategory } from "../../actions/categories";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 10,
  },
  tableContainer: {
    borderRadius: 15,
    // margin: '10px 10px',
    maxWidth: 1190,
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: "#F5F5F5",
    color: "#606060",
    // color: theme.palette.getContrastText(theme.palette.primary.dark)
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light),
  },
  name: {
    fontWeight: "bold",
    color: theme.palette.secondary.dark,
  },
  status: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "grey",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
  },
}));
export default function ManageCategories() {
  const categoryData = useSelector((state) => state.category);
  const dispatch = useDispatch();
  console.log(categoryData);
  const classes = useStyles();
  const catData = categoryData.categories;
  let counter_cat=1; 
  const [postData, setPostData] = useState({
    name: "",
  });

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault(); //not work for re fresh

    dispatch(addCategory(postData));
    clear();
    window.location.reload();
  };

  const clear = () => {
    setPostData({
      name: "",
    });
  };
  return (
    <>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <form
          autoComplete="off"
          noValidate
          // className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <TextField
            name="name"
            variant="outlined"
            size="small"
            label="Enter name of Category"
            id="fullWidth"
            value={postData.name}
            onChange={(e) => setPostData({ ...postData, name: e.target.value })}
          />
          <Button
            className="left-3 btn-setting"
            variant="contained"
            size="medium"
            type="submit"
         
           >

            Add Category
           
          </Button>
        </form>
        <h1 className=" mt-4">Categories</h1>

        {/* Table start */}
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHeaderCell}>Sr#</TableCell>
                <TableCell className={classes.tableHeaderCell}>Name</TableCell>

                <TableCell align="center" className={classes.tableHeaderCell}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
               {/* {
          console.log(catData)
        } 
     */}
              {catData?.map((row) => (
                <TableRow key={row._id}>
                  <TableCell>
               
                    <Grid container>{counter_cat++}</Grid>
                  </TableCell>
                  <TableCell>
                    <Typography className=" font-extrabold" variant="subtitle2">
                      {row.name}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Button
                      className=" left-14"
                      size="small"
                      style={{
                        backgroundColor: "red",
                        color: "white",
                      }}
                      onClick={() => {
                     
                        dispatch(
                          actionCreatorsCategory.deleteCategories(row._id)
                          );

                         
                      }}
                    >
                      Delete
                    </Button>
                    {
                      // counter_cat=counter_cat+1;
}
                  </TableCell>
                </TableRow>
              ))}



            </TableBody>
          </Table>
        </TableContainer>

        {/* Table END */}
      </Box>
    </>
  );
}

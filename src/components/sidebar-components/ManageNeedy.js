import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import {
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
import {fetchNeedyAPI} from './../../api/index'
import {actionCreatorsNeedy} from '../../actions/index';

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


export default function ManageNeedy() {
  const neediesData = useSelector((state) => state.needy);
  const dispatch=useDispatch();
  console.log(neediesData);

  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>Name</TableCell>
            <TableCell className={classes.tableHeaderCell}>Email</TableCell>
            <TableCell className={classes.tableHeaderCell}>
              {" "}
              Password{" "}
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>City</TableCell>
            <TableCell className={classes.tableHeaderCell}> State </TableCell>
            <TableCell className={classes.tableHeaderCell}>Country</TableCell>
            <TableCell align="center" className={classes.tableHeaderCell}>
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* <TableRow> */}
          {/* <TableCell component="th" scope="row">
              {neediesData.map((element) => {
            {return <div key={element._id}>{element.title}</div>;}
          })}
           </TableCell>
          </TableRow> */}

          {neediesData.map((row) => (
            <TableRow key={row._id}>
              <TableCell>
                {/* <Avatar/> */}
                <Grid container>{row.creator}</Grid>
              </TableCell>
              <TableCell>
                <Typography color="primary" variant="subtitle2">
                  {row.message}
                </Typography>
              </TableCell>

              {/* //3 */}
              <TableCell>
                <Grid container>{row.creator}</Grid>
              </TableCell>

              {/* 4 */}
              <TableCell>
                <Grid container>{row.creator}</Grid>
              </TableCell>
              {/* 5 */}

              <TableCell>
                <Grid container>{row.creator}</Grid>
              </TableCell>
              {/* 6 */}
              <TableCell>
                <Grid container>{row.creator}</Grid>
              </TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => {
                    // dispatch(deleteDonor(row._id))
                    dispatch(actionCreatorsNeedy.deleteNeedy(row._id));
                  }}
                >
                  Reject
                </Button>

                <Button
                  variant="contained"
                  style={{
                    color: "white",
                    backgroundColor: "green",
                    marginLeft: "3px",
                  }}
                  size="small"
                  onClick={() => {
                    dispatch(actionCreatorsNeedy.approveNeedy(row._id));
                  }}
                >
                  Approve
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={USERS.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableFooter> */}
      </Table>
    </TableContainer>
  );
}

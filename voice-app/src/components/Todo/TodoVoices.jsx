import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadVoices } from "../../redux/features/voice";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { StyledTableCell, StyledTableRow, useStyles } from "./StyleTodo";

function TodoVoices() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const voice = useSelector((state) => state.voices.items);

  useEffect(() => {
    dispatch(loadVoices());
  }, [dispatch]);

  return (
    <TableContainer
      component={Paper}
      style={{ overflow: "auto", maxHeight: 600 }}
    >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Language</StyledTableCell>
            <StyledTableCell align="right">name</StyledTableCell>
            <StyledTableCell align="right">Provider language</StyledTableCell>
            <StyledTableCell align="right">sex</StyledTableCell>
            <StyledTableCell align="right">id</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {voice.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="left">{row.language}</StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">
                {row.providerLanguage}
              </StyledTableCell>
              <StyledTableCell align="right">{row.sex}</StyledTableCell>
              <StyledTableCell align="right">{row.id}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TodoVoices;

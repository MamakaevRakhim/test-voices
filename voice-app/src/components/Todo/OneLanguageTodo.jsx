import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadLanguageId } from "../../redux/features/voice";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { StyledTableCell, StyledTableRow, useStyles } from "./StyleTodo";
import { useParams } from "react-router-dom";

function OneLanguageTodo() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { language } = useParams();

  const voiceLanguage = useSelector((state) => state.voices.loadLanguage);

  useEffect(() => {
    dispatch(loadLanguageId(language));
  }, [language, dispatch]);

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
          {voiceLanguage.map((row) => {
            return (
              <StyledTableRow key={row._id}>
                <StyledTableCell align="left">{row.language}</StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.providerLanguage}
                </StyledTableCell>
                <StyledTableCell align="right">{row.sex}</StyledTableCell>
                <StyledTableCell align="right">{row.id}</StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OneLanguageTodo;

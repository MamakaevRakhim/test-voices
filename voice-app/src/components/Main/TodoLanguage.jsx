import React from "react";
import { useSelector } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import { List, ListItemText } from "@material-ui/core";
import { NavLink } from "react-router-dom";

function TodoLanguage() {
  const voice = useSelector((state) => state.voices.items);

  let arr = [];
  voice.map((state) => {
    arr.push(state.language);
  });
  let language = [...new Set(arr)];
  return (
    <List>
      {language.map((state) => {
        return (
          <ListItem button>
            <NavLink to={`/${state}`}>
              <ListItemText>{state}</ListItemText>
            </NavLink>
            <ListItemText />
          </ListItem>
        );
      })}
    </List>
  );
}

export default TodoLanguage;

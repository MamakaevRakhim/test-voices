import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import voicesReducer from "./features/voice";

export const store = createStore(
  combineReducers({
    voices: voicesReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

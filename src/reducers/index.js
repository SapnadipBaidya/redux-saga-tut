import petCounter from "./petCounter";
import petFavorite from "./petFavorite";
import users from "./users";
import { combineReducers } from "redux";

const reducers = combineReducers({
  petCounter:petCounter,
  petFavorite:petFavorite,
  users:users,
});

export default reducers;

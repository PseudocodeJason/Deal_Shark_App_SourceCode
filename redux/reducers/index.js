import { combineReducers } from "redux";
import apiSearch from "./apiSearch";
import apiFindGame from "./apiFindGame";
import apiFindStores from "./apiFindStores";
import apiAllStores from "./apiAllStores";
//Reducers



export default combineReducers({apiSearch, apiFindGame, apiAllStores, apiFindStores});
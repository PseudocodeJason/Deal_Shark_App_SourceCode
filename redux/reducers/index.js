import { combineReducers } from "redux";
//Reducers
import apiSearch from "./apiSearch";
import apiFindGame from "./apiFindGame";
import apiAllStores from "./apiAllStores";
import apiFindStores from "./apiFindStores";


export default combineReducers({apiSearch, apiFindGame, apiAllStores, apiFindStores});
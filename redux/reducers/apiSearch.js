import { SEARCH_GAME } from "../actionType";

const initial_state = {
    apiList: [],
}
export default (state = initial_state, action)=>{
 
    if (action.type == SEARCH_GAME){
        console.log(JSON.stringify(action));
        var game = action.payload.name
        console.log(game)
        return{
            ...state,
            apiList: game
        }
    }
    return state;
}
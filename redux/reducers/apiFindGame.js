import { SEARCH_GAMEID } from "../actionType";

const initial_state = {
    game: []
}
export default (state = initial_state, action)=>{
 
    if (action.type == SEARCH_GAMEID){
        console.log(JSON.stringify(action));
        var gameContent = action.payload.game
        console.log(gameContent)
        return{
            ...state,
            game: gameContent
        }
    }
    return state;
}
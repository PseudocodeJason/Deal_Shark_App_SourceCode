import { SEARCH_GAMEID } from "../actionType";

const initial_state = {
    game: []
}
export default (state = initial_state, action)=>{
 
    if (action.type == SEARCH_GAMEID){
        console.log(JSON.stringify(action));
        var gameContent = action.payload.game
        var storeContent = action.payload.store
        //Intercipts StoreID to check for what store its from and add to storeName using AllStore 
        gameContent.deals.forEach(element => {
            storeContent.forEach(element2 =>{
                if (element.storeID == element2.storeID){
                    element.storeName = element2.storeName
                }
            })
        });
        console.log(gameContent)
        return{
            ...state,
            game: gameContent
        }
    }
    return state;
}
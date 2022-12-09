import { SEARCH_STORE } from "../actionType";

const initial_state = {
    store: []
}
export default (state = initial_state, action)=>{
 
    if (action.type == SEARCH_STORE){
        console.log(JSON.stringify(action));
        var storeName = action.payload.store
        console.log(storeName)
        return{
            ...state,
            store: storeName
        }
    }
    return state;
}
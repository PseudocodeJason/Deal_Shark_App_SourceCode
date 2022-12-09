import { GET_STORE } from "../actionType";

const initial_state = {
    allStores: []
}
export default (state = initial_state, action)=>{
 
    if (action.type == GET_STORE){
        console.log(JSON.stringify(action));
        var storesList = action.payload.allStores
        console.log(storesList)
        return{
            ...state,
            allStores: storesList
        }
    }
    return state;
}
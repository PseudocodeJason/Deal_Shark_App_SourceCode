import { BUTTON_YES, BUTTON_NO } from "../actionType";


const initial_state = {
    yes: []
}
export default (state = initial_state, action)=>{
 
    if (action.type == BUTTON_YES){
        console.log(JSON.stringify(action));
        var goToURL = action.payload.url
        console.log(storeName)
        return{
            ...state,
            yes: goToURL
        }
    }
    return state;
}


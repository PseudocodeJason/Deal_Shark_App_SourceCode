import { GET_STORE } from "../actionType";

const initial_state = {
    allStores: []
}
export default (state = initial_state, action)=>{
 
    if (action.type == GET_STORE){
        console.log(JSON.stringify(action));
        var storesList = action.payload.allStores
        console.log(storesList)
        //Searches Through The store and looks for activestores and adds them to the new array
        var activeStores = []
        storesList.forEach(element => {
            console.log(element)
            if (element.isActive == "1"){
                console.log("match")
                activeStores = [...activeStores, element]
            }
        });
        console.log(activeStores)
        return{
            ...state,
            allStores: activeStores
        }
    }
    return state;
}
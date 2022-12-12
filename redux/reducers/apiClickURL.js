import { BUTTON_YES, BUTTON_NO } from "../actionType";


const initial_state = {
    buttons: [{
        text: 'Yes',
        onPress: () => {
         ToastAndroid.show("Card was deleted successfully", ToastAndroid.LONG)
        },
      },
      {
        text: 'No',
        onPress: () => {
          console.log('No was pressed');
        },
      },]
}
export default (state = initial_state, action)=>{
 
    if (action.type == BUTTON_YES){
        console.log(JSON.stringify(action));
        var goToURL = action.payload.url
        console.log(storeName)
        return{
            ...state,
            buttons: goToURL
        }
    }
    return state;
}


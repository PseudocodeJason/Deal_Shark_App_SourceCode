import {SEARCH_GAME} from "../actionType";

export const SearchGame = (name) =>({
    type: SEARCH_GAME,
    payload:{
        name:name
    }
})


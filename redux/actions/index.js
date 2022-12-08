import {SEARCH_GAME, SEARCH_GAMEID} from "../actionType";

export const SearchGameTitle = (name) =>({
    type: SEARCH_GAME,
    payload:{
        name:name
    }
})

export const SearchGameID = (game) =>({
    type: SEARCH_GAMEID,
    payload:{
        game:game
    }
})


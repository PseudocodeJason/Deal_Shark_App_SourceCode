import {SEARCH_GAME, SEARCH_GAMEID, SEARCH_STORE, CLICK_URL, GET_STORE} from "../actionType";

export const SearchGameTitle = (name) =>({
    type: SEARCH_GAME,
    payload:{
        name:name
    }
})

export const SearchGameID = (game, store) =>({
    type: SEARCH_GAMEID,
    payload:{
        game:game,
        store:store
    }
})
export const SearchStore = (store) =>({
    type: SEARCH_STORE,
    payload:{
        store:store
    }
})
export const ClickURL = (url) => ({
    type: CLICK_URL,
    payload: {
        url: url
    }
})

export const GetStore = (allStores) => ({
    type: GET_STORE,
    payload: {
        allStores: allStores
    }
})
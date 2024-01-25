import { ADD_FAVORITE, REMOVE_FAVORITE, SVUOTA_LISTA } from "../actions/favoriteActions"

const initialState = {
    list: []
}


const favoritesReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                list: state.list.filter((fav) => fav !== action.payload)
            }
        case SVUOTA_LISTA:
            return {
                ...state,
                list: state.list = []
            }
        default:
            return state
    }
}


export default favoritesReducers;
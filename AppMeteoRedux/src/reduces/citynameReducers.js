import { NEW_CITTA } from "../action/favoriteActions"

/* const initialStateCitta = {
    nome: ''
} */


const citynameReducers = (state = {}, action) => {
    switch (action.type) {
        case NEW_CITTA:
            return {
                state: action.payload
            }
        default:
            return state
    }
}


export default citynameReducers;
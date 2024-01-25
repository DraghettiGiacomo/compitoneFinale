import { NEW_CITTA } from "../action/favoriteActions"

const initialStateCitta = {
    nome: 'pippo'
}


const citynameReducers = (state = initialStateCitta, action) => {
    switch (action.type) {
        case NEW_CITTA:
            return {
                ...state,
                nome: action.payload
            }
        default:
            return state
    }
}


export default citynameReducers;
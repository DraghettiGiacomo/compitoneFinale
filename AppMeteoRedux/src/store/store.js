import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../reduces/favoritesReducers";
import citynameReducers from "../reduces/favoritesReducers";


const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        city : citynameReducers  
    } 
});


export default store;
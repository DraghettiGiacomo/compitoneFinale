import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../reduces/favoritesReducers";


const store = configureStore({
    reducer: favoritesReducer 
});


export default store;
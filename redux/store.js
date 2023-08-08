import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from './slices/gameSlice';

const store = configureStore({
   reducer: {
        games: gamesReducer
   }
})

export default store

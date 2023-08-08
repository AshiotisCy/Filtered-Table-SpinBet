import { createSlice } from "@reduxjs/toolkit"

export const gameslice= createSlice({
    name:"games",
    initialState: {
        data: [],
        filteredGames: [],
        filter: "all"
    },
    reducers:{
        setStoreGames: (state, action) => {
            state.data = action.payload;
        },
        setFilter: (state, action)=> {
            state.filter = action.payload
        },
        setFilteredGames: (state, action) => {
            state.filteredGames = action.payload
        }
    }
})

export const {setStoreGames, setFilter, setFilteredGames} = gameslice.actions;

export default gameslice.reducer;
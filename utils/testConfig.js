import { configureStore } from '@reduxjs/toolkit';
import gameSlice from '../redux/slices/gameSlice'; // Adjust the path based on your folder structure

// Mocked state
const mockState = {
    games: {
        data: [
            {
                "id":"hbaffaf",
                "name":"FK Tyumen - Luch-Energiya Vladivostok",
                "competitionId":"bbbg",
                "competition":"Football National League",
                "countryId":"cb",
                "country":"Russia",
                "timestamp":1470484800,
                "date":"06.08.2016.",
                "time":"12:00",
                "status":{
                   "code":100,
                   "type":"finished"
                },
                "round":{
                   "round":6
                },
                "homeTeam":{
                   "id":75207,
                   "name":"FK Tyumen",
                   "slug":"fk-tyumen",
                   "gender":"M",
                   "subTeams":[

                   ]
                },
                "awayTeam":{
                   "id":5852,
                   "name":"Luch-Energiya Vladivostok",
                   "slug":"luch-energiya-vladivostok",
                   "gender":"M",
                   "subTeams":[

                   ]
                },
                "homeScore":{
                   "current":0,
                   "period1":0,
                   "normaltime":0
                },
                "awayScore":{
                   "current":0,
                   "period1":0,
                   "normaltime":0
                },
                "liveStatus":"FT"
            },
            {
                "id":"hajeeha",
                "name":"Spartak Trnava - MSK Zilina",
                "competitionId":"jc",
                "competition":"Superliga",
                "countryId":"cd",
                "country":"Slovakia",
                "timestamp":1470589200,
                "date":"07.08.2016.",
                "time":"17:00",
                "status": {
                    "code":0,
                    "type":"notstarted"
                },
                "round":{
                "round":4
                },
                "homeTeam":{
                "id":2406,
                "name":"Spartak Trnava",
                "slug":"spartak-trnava",
                "gender":"M",
                "subTeams":[

                ]
                },
                "awayTeam":{
                "id":2402,
                "name":"MSK Zilina",
                "slug":"msk-zilina",
                "gender":"M",
                "subTeams":[

                ]
                },
                "homeScore":{

                },
                "awayScore":{

                },
                "liveStatus":"-"
            },
        ],
        filter: 'all',
        filteredGames: []
    }
};

// Create a mocked store with the mockState
const mockStore = configureStore({
    reducer: { games: gameSlice },
    preloadedState: mockState
});

export { mockState, mockStore };





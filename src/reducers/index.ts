import { combineReducers } from '@reduxjs/toolkit';
import formlistReducer from "./searchResultReducers";
import formGridReducers from "./selectedResultlistReducer"

const rootReducer = combineReducers({
    formlistReducer,
    formGridReducers
})

export default rootReducer
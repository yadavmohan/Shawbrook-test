import { combineReducers } from "redux"
import formlistReducer from "./searchResultReducers";
import formGridReducers from "./selectedResultlistReducer"

const rootReducer = combineReducers({
    formlistReducer,
    formGridReducers
})

export default rootReducer
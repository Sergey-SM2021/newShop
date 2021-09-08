import { createStore } from "redux";
import { combineReducers } from "redux";
import buscetReducer from "./buscetReducer";
import buyersReducer from "./buyersReducer";
import mainReducer from "./mainReducer";

const reducers = combineReducers({
    mainReducer : mainReducer,
    buscetReducer : buscetReducer,
    buyersReducer : buyersReducer
})

const store = createStore(reducers)

export type reducersType = ReturnType<typeof reducers>

export default store
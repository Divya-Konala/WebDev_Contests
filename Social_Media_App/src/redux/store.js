import {combineReducers,legacy_createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { AppReducer } from "./appReducer/app.reducer"
const rootreducer=combineReducers({AppReducer})
export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))
import { combineReducers, legacy_createStore } from "redux";
import { reducer } from "./reducer";
import {reducer as appreducer } from "../redux-arch/app_reducer/reducer" 

const rootreducer=combineReducers({reducer,appreducer})

const store=legacy_createStore(rootreducer)


export {store}
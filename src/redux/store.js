import { combineReducers, createStore, applyMiddleware } from "redux"
import thunkMiddleware from 'redux-thunk'

import {articleReducer} from './articleReducer'


const rootReducer = combineReducers({
    articlesPage: articleReducer   
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

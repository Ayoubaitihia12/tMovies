import { combineReducers } from "redux";
import WatchListReducer from './watchedList/watchlistReducer'
import WatchedReducer from './watched/watchedReducer'

export const rootReducer = combineReducers({
    watchlist : WatchListReducer,
    watched : WatchedReducer,
});
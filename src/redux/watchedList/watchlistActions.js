import * as actions from './actionTypes';

export const addWatchList = (movie)=>{
    return {
        type : actions.ADD_TO_WATCH_LIST,
        payload : movie,
    };
};

export const removeWatchList = (movie)=>{
    return {
        type : actions.REMOVE_FROM_WATCH_LIST,
        payload : movie,
    };
};
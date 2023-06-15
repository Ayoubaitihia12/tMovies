import * as actions from './actionTypes';

export const addWatched = (movie)=>{
    return {
        type : actions.ADD_TO_WATCHED,
        payload : movie,
    };
};

export const removeWatched = (movie)=>{
    return {
        type : actions.REMOVE_FROM_WATCHED,
        payload : movie,
    };
};
import * as actions from './actionTypes';

const initialState = [];

const reducer = (state = initialState , action)=>{
    const movie = action.payload;
    switch (action.type) {
        case actions.ADD_TO_WATCH_LIST:
            const exist = state.find((e) => e.id === movie.id); 
            if(exist){
                return state;
            }else{
                return [...state,{...movie}];
            }
            break;
        case actions.REMOVE_FROM_WATCH_LIST:
            const exist1 = state.find((e) => e.id === movie.id); 
            if(exist1){
                return state.filter((e) => e.id !== movie.id);
            }else{
                return state;
            }
        break;
        default:
            return state;
            break;
    }
}
export default reducer;
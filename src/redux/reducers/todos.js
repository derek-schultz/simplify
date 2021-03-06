import { ADD_TODO, UPDATE_TODO, COMPLETE_TODO } from '../actions/todos';

const initialState = [];

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                action.todo
            ];
        default:
            return state;
    }
}
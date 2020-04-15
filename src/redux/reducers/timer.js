import { TICK } from '../actions/timer';

const initialState = {
    seconds: 0
};

export default function(state = initialState, action) {
    switch(action.type) {
        case TICK:
            return {
                ...state,
                seconds: state.seconds + 1
            };
        default:
            return state;
    }
}
import { TICK } from '../actions/timer';

const initialState = {
    seconds: 0,
    minutes: 0,
};

export default function(state = initialState, action) {
    switch(action.type) {
        case TICK:
            let { seconds, minutes } = state;
            seconds++;
            if (seconds > 59) {
                seconds = 0;
                minutes++;
            }
            return {
                ...state,
                seconds,
                minutes,
            };
        default:
            return state;
    }
}
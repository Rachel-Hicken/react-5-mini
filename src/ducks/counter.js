const initial_state ={
    value: 0
}

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

export default function reducer(state=initial_state, action){
    switch(action.type){
        case INCREMENT:
        return {value: state.value + action.payload};
        case DECREMENT:
        return {value: state.value - action.payload};
        default:
        return state;
    }
}


export function increment(amount){
    return{
        type: INCREMENT,
        payload: amount
    }
}

export function decrement(amount){
    return{
       type: DECREMENT,
       payload: amount
    }
}

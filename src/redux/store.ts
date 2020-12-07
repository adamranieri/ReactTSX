import { Action, ActionCreator, Reducer, createStore  } from 'redux';


export interface CountState{
    count:number,
    calls:number
}

const reducer:Reducer<CountState,Action> = (state:CountState = {count:0,calls:0} ,action:Action<string>) =>{

    if(action.type === "ADD"){
        const nextState = {count:state.count +1, calls:state.calls +1}
        return nextState ;
    }
    if(action.type === "ADD_AMOUNT"){
        const nextState = {count:state.count +1, calls:state.calls +1}
        return nextState ;
    }

    if(action.type === "SUBTRACT"){
        const nextState = {count:state.count -1, calls:state.calls +1}
        return nextState ;
    }
    return state;
}



const store = createStore(reducer);

export default store;


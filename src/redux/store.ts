import { stat } from 'fs';
import { Action, Reducer, createStore } from 'redux';


export interface CountState{
    count:number,
    calls:number
}

interface AddAction{
    type:string,
    amount:number
}


export class ActionCrafter{
    static incrementByOne(){
        return {type:"ADD", amount:1}
    }
}


const reducer:Reducer<CountState, AddAction> = (state:CountState = {count:0,calls:0}, action:AddAction ) =>{

    switch(action.type){

        case "ADD": {
            const nextState = {count:state.count + action.amount, calls:state.calls +1}
            return nextState;
        }

        case "SUBTRACT": {
            const nextState = {count:action.amount, calls:state.calls +1}
            return nextState ;
        }

        default: return state
    }
   
}

const store = createStore(reducer);

export default store;


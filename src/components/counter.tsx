import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CountState } from '../redux/store';

export default function Counter(props:{title:string}){

    const reduxCount:number = useSelector((state:CountState)=> state.count)
    const reduxCalls:number = useSelector((state:CountState)=> state.calls)   
    const dispatch = useDispatch()
    
    const [localCount,setLocalCount] = useState(0);

    function localIncrement(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        const nextLocalCount = localCount + 1;
        setLocalCount(nextLocalCount);
    }

    function localDecrement(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        const nextLocalCount = localCount - 1;
        setLocalCount(nextLocalCount);
    }

    function storeIncrement(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        dispatch({type:'ADD',amount:1})
    }

    function storeDecrement(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        dispatch({type:'ADD',amount:-1})
    }

    return(<div>

    <h1>{props.title}</h1>
    <h3>Store Count {reduxCount} total calls:{reduxCalls}</h3>
    <h3>Local Count : {localCount}</h3> 

    <span>
    <button onClick={localIncrement}>Increment Local Count</button>
    <button onClick ={localDecrement}>Decrement Local Count</button>
    </span>

    <span>
        <button onClick={storeIncrement}>Increment Store Count</button>
        <button onClick={storeDecrement}>Decrement Store Count</button>
    </span>

    </div>)
}
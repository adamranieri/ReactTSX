import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../store';

export default function Intro(){


    const count: number = useSelector((state: State) => state.count);
    const dispatch = useDispatch();
    const [name, setName] = useState('Nobody');


    function increment(event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void {
        const num = count+1;
        dispatch({type: 'count', payload: {count: num} })       
    }

    function namePrinter(event:React.ChangeEvent<HTMLInputElement>){
        const inputValue:string = event.target.value;
        setName(inputValue);
    }

    function greet(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        alert(name);
    }

    return(<div>

        <h1>Hello {name}</h1>
     
        <button onClick={increment}>increment</button>
        {count}
        <input type="text" onChange={namePrinter}/>
        <button onClick={greet}>Get Greeted</button>

        </div>)

}
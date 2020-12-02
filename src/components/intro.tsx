import React, { useState } from 'react';

export default function Intro(){


    const [count,setCount] = useState(0);
    const [name, setName] = useState('Nobody')

    function increment(event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void {
        const num = count+1;
        setCount(num);       
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
        <input type="text" onChange={namePrinter}/>
        <button onClick={greet}>Get Greeted</button>

        </div>)

}
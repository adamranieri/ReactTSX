import React from 'react';

export default function Incrementer(props:{setCount:React.Dispatch<React.SetStateAction<number>>}){

    function changeTo100() {
        props.setCount(100);
    }
    
    function changeTo200(){
        props.setCount(200);
    }

    function changeTo300(event:React.MouseEvent<HTMLButtonElement, MouseEvent>,num:number){
        props.setCount(num);
    }

    return(<div>
        <button onClick={changeTo100}>To 100</button>
        <button onClick={changeTo200}>To 200</button>
        <button onClick={(event)=> changeTo300(event,300)}>To 300</button>
    </div>)
}
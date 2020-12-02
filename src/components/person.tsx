import React, { useState } from 'react';

export function Person(props:{name:string, age:number}){


    return(<div>
        <h1>What's Up {props.name}</h1>
        <h1>Age {props.age}</h1>
    </div>)
}
import React, { useState } from 'react';

export default function CountContainer(){

    const [count,setCount] = useState(0);

    return(<div>
        <h1>Count container</h1>
        <h3>Current count {count}</h3>
      
        </div>)

}

    


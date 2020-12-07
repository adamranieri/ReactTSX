import React from 'react'

export default function CharacterList(props:{characters:Array<String>}){


    const characters = props.characters;
    
    //  returns a bunch of JSX elements
    let i =0;
    const characterListItems:JSX.Element[] = characters.map(character => <li key={i++}>{character}</li>);

    return(<div>
        <h1>Champions</h1>
        <ul>
            {characterListItems}
        </ul>

    </div> )

}
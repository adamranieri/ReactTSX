import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { CountState } from '../redux/store'

// function that returns an object modeling the relavent states 
const mapState = (state: CountState) => ({
    count:state.count
  })
  
// object with functions that send a d
const mapDispatch = {
    add: () => ({ type: 'ADD' })
  }
const connector = connect(mapState,mapDispatch);


type PropsFromRedux = ConnectedProps<typeof connector>

function CountRedux(props:PropsFromRedux & {title:string}){

    console.log(props.count)
    return(<div>
        <h1>Count {props.count}</h1>
        <button onClick={props.add}>click</button>

    </div>)
}

export default connector(CountRedux);
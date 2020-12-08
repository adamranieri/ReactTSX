import React from 'react';
import './App.css';
import Intro from './components/intro';
import { Person } from './components/person';
import {Provider} from 'react-redux';
import store from '../src/redux/store'
import Counter from './components/counter';




function App() {
  return (
   

    <div className="App"> 
    <Provider store={store}>
     
      <Intro></Intro>
      <Person name="Adam" age={26}></Person>
      <Person name="Bill" age={40}></Person>
      <Counter title="Counter 1"></Counter>
      <Counter title="Counter 2"></Counter>

    </Provider>
    </div>

    
  );
}

export default App;

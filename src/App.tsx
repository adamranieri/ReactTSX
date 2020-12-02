import React from 'react';
import './App.css';
import Intro from './components/intro';
import { Person } from './components/person';

function App() {
  return (
    <div className="App">
      <Intro></Intro>
      <Person name="Adam" age={26}></Person>
      <Person name="Bill" age={40}></Person>
      
    </div>
  );
}

export default App;
